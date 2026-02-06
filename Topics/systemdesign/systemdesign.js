/* ===== System Design Interview Questions ===== */

const defined_questions = {
  systemdesign: {
    easy: [
      {
        q: "What is horizontal vs vertical scaling, and when would you choose each?",
        a: `<strong>Vertical Scaling (Scale Up):</strong> Adding more power (CPU, RAM, SSD) to an existing server. Simple but has a hardware ceiling and single point of failure.<br><br>
<strong>Horizontal Scaling (Scale Out):</strong> Adding more machines to your pool. More complex (requires load balancing, data consistency) but offers virtually unlimited growth and better fault tolerance.<br><br>
<strong>When to choose:</strong><br>
• <strong>Vertical:</strong> Small-to-medium traffic, relational DB that's hard to shard, early-stage startups seeking simplicity<br>
• <strong>Horizontal:</strong> High traffic, stateless services, microservices architecture, when you need 99.99% uptime`,
        example: `// Example: Horizontal scaling with a load balancer
// Instead of one server handling 10K req/s:
// Server A (5K req/s) + Server B (5K req/s) behind a Load Balancer

// Node.js cluster for vertical -> horizontal on single machine:
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++) cluster.fork();
} else {
  require('./server'); // Each worker handles requests
}`,
      },
      {
        q: "Explain the CAP theorem and its practical implications for distributed systems.",
        a: `The <strong>CAP Theorem</strong> states that a distributed system can guarantee only two of three properties simultaneously:<br><br>
<strong>1. Consistency (C):</strong> Every read receives the most recent write or an error<br>
<strong>2. Availability (A):</strong> Every request gets a (non-error) response, without guarantee it's the most recent write<br>
<strong>3. Partition Tolerance (P):</strong> System continues operating despite network partitions between nodes<br><br>
<strong>Practical implications:</strong><br>
• Since network partitions are inevitable in distributed systems, you must choose between <strong>CP</strong> or <strong>AP</strong><br>
• <strong>CP systems</strong> (e.g., MongoDB, HBase, Redis Cluster): Choose consistency — during a partition, some requests may be rejected<br>
• <strong>AP systems</strong> (e.g., Cassandra, DynamoDB, CouchDB): Choose availability — during a partition, reads might return stale data<br>
• Most real systems offer tunable consistency (e.g., Cassandra's read/write quorum levels)`,
      },
      {
        q: "What is a CDN and how does it improve application performance?",
        a: `A <strong>Content Delivery Network (CDN)</strong> is a geographically distributed network of proxy servers that cache and serve content closer to end users.<br><br>
<strong>How it improves performance:</strong><br>
• <strong>Reduced latency:</strong> Content served from edge servers near the user (50ms vs 500ms+)<br>
• <strong>Reduced origin load:</strong> Static assets offloaded, origin handles only dynamic requests<br>
• <strong>Higher availability:</strong> If one edge server fails, traffic redirects to the next closest<br>
• <strong>DDoS protection:</strong> CDNs absorb distributed attacks across their network<br><br>
<strong>Pull vs Push CDN:</strong><br>
• <strong>Pull:</strong> CDN fetches from origin on first request, then caches (e.g., Cloudflare). Easier to set up, possible cache misses.<br>
• <strong>Push:</strong> You upload content directly to CDN. Better for large, rarely-changing files.`,
        example: `// CDN configuration example (Cloudflare Workers):
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const cache = caches.default;
  let response = await cache.match(request);
  
  if (!response) {
    response = await fetch(request);
    // Cache for 1 hour
    response = new Response(response.body, {
      ...response,
      headers: { ...response.headers, 'Cache-Control': 'max-age=3600' }
    });
    event.waitUntil(cache.put(request, response.clone()));
  }
  return response;
}`,
      },
      {
        q: "What is a load balancer and what are the common load balancing algorithms?",
        a: `A <strong>Load Balancer</strong> distributes incoming traffic across multiple servers to ensure no single server bears too much demand, improving reliability and performance.<br><br>
<strong>Common algorithms:</strong><br>
• <strong>Round Robin:</strong> Requests distributed sequentially across servers. Simple, works well when servers are identical.<br>
• <strong>Weighted Round Robin:</strong> Like round robin but servers get proportional traffic based on assigned weights (for heterogeneous hardware).<br>
• <strong>Least Connections:</strong> Route to server with fewest active connections. Great for long-lived connections (WebSockets).<br>
• <strong>IP Hash:</strong> Hash client IP to consistently route to same server. Useful for session persistence.<br>
• <strong>Least Response Time:</strong> Route to server with fastest response time + fewest connections.<br><br>
<strong>Layer 4 vs Layer 7:</strong><br>
• <strong>L4 (Transport):</strong> Routes based on IP/port. Faster, less flexible.<br>
• <strong>L7 (Application):</strong> Routes based on HTTP headers, URL, cookies. More intelligent routing (e.g., /api → backend, /static → CDN).`,
      },
    ],
    medium: [
      {
        q: "Design a URL shortener like bit.ly. What are the key components and trade-offs?",
        a: `<strong>Requirements:</strong> Generate short URLs, redirect to original URL, handle 100M+ URLs, analytics tracking.<br><br>
<strong>Key Design Decisions:</strong><br><br>
<strong>1. URL Generation Strategy:</strong><br>
• <strong>Base62 encoding</strong> of auto-increment ID: Short, unique, but predictable. 6 chars = 56.8B combinations.<br>
• <strong>MD5/SHA256 hash + truncate:</strong> Collision-possible, needs checking. Unpredictable.<br>
• <strong>Pre-generated key service:</strong> Background worker pre-generates unique keys. Fast, no collision at write time.<br><br>
<strong>2. Architecture:</strong><br>
• <strong>Database:</strong> NoSQL (DynamoDB/Cassandra) for write-heavy workload. Schema: {shortCode, longUrl, userId, createdAt, expiresAt, clickCount}<br>
• <strong>Cache:</strong> Redis for hot URLs (80/20 rule — 20% of URLs get 80% of traffic)<br>
• <strong>Read:Write ratio:</strong> ~100:1, so heavy read optimization needed<br><br>
<strong>3. Redirect Flow:</strong> Client → LB → App Server → Redis cache (hit?) → DB → 301/302 redirect<br>
• <strong>301 (Permanent):</strong> Browser caches, less server load, harder to track clicks<br>
• <strong>302 (Temporary):</strong> Always hits server, better for analytics`,
        example: `// URL Shortener - Core Logic
class URLShortener {
  constructor(db, cache) {
    this.db = db;       // DynamoDB/Cassandra
    this.cache = cache;  // Redis
  }

  // Base62 encoding approach
  encode(id) {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    while (id > 0) {
      result = chars[id % 62] + result;
      id = Math.floor(id / 62);
    }
    return result.padStart(6, '0');
  }

  async shorten(longUrl, userId) {
    const id = await this.db.getNextId(); // Distributed ID generator
    const shortCode = this.encode(id);
    await this.db.put({ shortCode, longUrl, userId, createdAt: Date.now() });
    await this.cache.set(shortCode, longUrl, 'EX', 86400); // Cache 24h
    return shortCode;
  }

  async resolve(shortCode) {
    let url = await this.cache.get(shortCode);
    if (!url) {
      const record = await this.db.get(shortCode);
      url = record?.longUrl;
      if (url) await this.cache.set(shortCode, url, 'EX', 86400);
    }
    return url;
  }
}`,
      },
      {
        q: "Explain microservices architecture. What problems does it solve and what problems does it create?",
        a: `<strong>Microservices</strong> is an architectural style where an application is composed of small, independently deployable services, each running in its own process and communicating via lightweight protocols (HTTP/gRPC/messaging).<br><br>
<strong>Problems it solves:</strong><br>
• <strong>Scalability:</strong> Scale individual services independently (e.g., scale payment service during peak, not the whole app)<br>
• <strong>Team autonomy:</strong> Small teams own individual services end-to-end. Different teams can use different tech stacks.<br>
• <strong>Deployment independence:</strong> Deploy one service without redeploying the entire application<br>
• <strong>Fault isolation:</strong> One service crashing doesn't bring down the whole system<br>
• <strong>Technology diversity:</strong> Use the right tool for each service (Python for ML, Go for networking)<br><br>
<strong>Problems it creates:</strong><br>
• <strong>Distributed system complexity:</strong> Network failures, data consistency, distributed tracing<br>
• <strong>Operational overhead:</strong> Need container orchestration (K8s), service mesh, centralized logging<br>
• <strong>Data management:</strong> Each service owns its data → cross-service queries are hard. Eventual consistency patterns (Saga, CQRS) needed.<br>
• <strong>Testing complexity:</strong> Integration testing across services is harder than monolith unit tests<br>
• <strong>Latency:</strong> Inter-service network calls add latency vs in-process monolith function calls`,
      },
      {
        q: "What is database sharding? Explain different sharding strategies and their trade-offs.",
        a: `<strong>Sharding</strong> is horizontal partitioning of data across multiple database instances, where each shard holds a subset of the total data.<br><br>
<strong>Sharding Strategies:</strong><br><br>
<strong>1. Range-based sharding:</strong><br>
• Split by value ranges (e.g., users A-M → Shard 1, N-Z → Shard 2)<br>
• Pro: Simple, range queries efficient. Con: Hot spots if data distribution uneven.<br><br>
<strong>2. Hash-based sharding:</strong><br>
• hash(shardKey) % numShards → target shard<br>
• Pro: Even distribution. Con: Range queries hit all shards; resharding is painful.<br><br>
<strong>3. Directory-based (lookup) sharding:</strong><br>
• A lookup service maps each key to its shard<br>
• Pro: Flexible rebalancing. Con: Lookup service is a bottleneck/SPOF.<br><br>
<strong>4. Geographic sharding:</strong><br>
• Data partitioned by region (EU data → EU shard, US data → US shard)<br>
• Pro: Data locality, GDPR compliance. Con: Cross-region queries are expensive.<br><br>
<strong>Challenges:</strong> Joins across shards, rebalancing when adding shards, maintaining referential integrity, distributed transactions.`,
        example: `// Consistent hashing for sharding (avoids full redistribution)
class ConsistentHash {
  constructor(nodes, virtualNodes = 150) {
    this.ring = new Map();
    this.sortedKeys = [];
    nodes.forEach(node => this.addNode(node, virtualNodes));
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = ((hash << 5) - hash + key.charCodeAt(i)) | 0;
    }
    return Math.abs(hash);
  }

  addNode(node, virtualNodes = 150) {
    for (let i = 0; i < virtualNodes; i++) {
      const key = this.hash(node + ':' + i);
      this.ring.set(key, node);
      this.sortedKeys.push(key);
    }
    this.sortedKeys.sort((a, b) => a - b);
  }

  getNode(key) {
    const hash = this.hash(key);
    for (const ringKey of this.sortedKeys) {
      if (hash <= ringKey) return this.ring.get(ringKey);
    }
    return this.ring.get(this.sortedKeys[0]); // Wrap around
  }
}`,
      },
      {
        q: "Explain caching strategies (Cache-Aside, Write-Through, Write-Behind, Read-Through) and when to use each.",
        a: `<strong>1. Cache-Aside (Lazy Loading):</strong><br>
• App checks cache first → miss → read from DB → populate cache<br>
• Most common pattern. Cache only what's actually requested.<br>
• Risk: Cache miss penalty (extra round trip). Stale data if DB updated externally.<br><br>

<strong>2. Read-Through:</strong><br>
• Cache sits between app and DB. Cache is responsible for loading data on miss.<br>
• App only talks to cache. Simpler app code, but cache library must support it.<br><br>

<strong>3. Write-Through:</strong><br>
• Data written to cache AND DB synchronously (cache before DB).<br>
• Pro: Cache always has latest data. Con: Write latency doubles (cache + DB).<br><br>

<strong>4. Write-Behind (Write-Back):</strong><br>
• Data written to cache immediately, then asynchronously flushed to DB in batches.<br>
• Pro: Extremely fast writes. Con: Risk of data loss if cache crashes before flush.<br><br>

<strong>Best practices:</strong><br>
• Always set TTL (Time To Live) to prevent stale data<br>
• Use Cache-Aside for read-heavy workloads with tolerance for slight staleness<br>
• Use Write-Through for data that must be consistent between cache and DB<br>
• Use Write-Behind for write-heavy workloads where you can tolerate brief inconsistency`,
      },
      {
        q: "What is the event-driven architecture pattern? Compare it with request-response.",
        a: `<strong>Event-Driven Architecture (EDA)</strong> is a pattern where services communicate by producing and consuming events asynchronously through a message broker (Kafka, RabbitMQ, AWS SNS/SQS).<br><br>
<strong>Key components:</strong><br>
• <strong>Event Producer:</strong> Service that emits events when state changes (e.g., "OrderPlaced")<br>
• <strong>Event Broker:</strong> Middleware that routes events (Kafka, RabbitMQ)<br>
• <strong>Event Consumer:</strong> Service that reacts to events (e.g., "send email on OrderPlaced")<br><br>
<strong>EDA vs Request-Response:</strong><br>
| Aspect | Request-Response | Event-Driven |<br>
| Coupling | Tight (caller knows target) | Loose (producer doesn't know consumers) |<br>
| Scaling | Sync, limited by slowest service | Async, each service scales independently |<br>
| Failure handling | Cascading failures | Isolated; events can be replayed |<br>
| Debugging | Easier (linear flow) | Harder (distributed, async flows) |<br><br>
<strong>Common patterns:</strong><br>
• <strong>Event Sourcing:</strong> Store all state changes as events (append-only log)<br>
• <strong>CQRS:</strong> Separate read and write models, synced via events<br>
• <strong>Saga:</strong> Manage distributed transactions as a sequence of events with compensating actions`,
      },
      {
        q: "Design a rate limiter. What algorithms exist and what are their trade-offs?",
        a: `<strong>Rate Limiter</strong> controls the rate of requests a client can make to prevent abuse and ensure fair usage.<br><br>
<strong>Algorithms:</strong><br><br>
<strong>1. Fixed Window Counter:</strong><br>
• Count requests in fixed time windows (e.g., 100 req per minute, reset at :00)<br>
• Pro: Simple, low memory. Con: Burst at window boundary (200 req in 2s spanning windows).<br><br>
<strong>2. Sliding Window Log:</strong><br>
• Store timestamp of each request, count those within the window<br>
• Pro: Precise. Con: High memory (stores all timestamps).<br><br>
<strong>3. Sliding Window Counter:</strong><br>
• Hybrid: weighted sum of current + previous window counts<br>
• Pro: Smooths out boundary issues, low memory. Con: Approximate.<br><br>
<strong>4. Token Bucket:</strong><br>
• Bucket holds tokens, refilled at fixed rate. Each request consumes a token.<br>
• Pro: Allows bursts (full bucket), simple. Used by AWS, Stripe.<br><br>
<strong>5. Leaky Bucket:</strong><br>
• Requests enter a queue (bucket), processed at fixed rate. Overflow is dropped.<br>
• Pro: Smooth, constant output rate. Con: Recent requests wait behind old ones.<br><br>
<strong>Distributed rate limiting:</strong> Use Redis with Lua scripts for atomic check-and-increment across multiple app servers.`,
        example: `// Token Bucket Rate Limiter with Redis
class TokenBucketLimiter {
  constructor(redis, maxTokens, refillRate) {
    this.redis = redis;
    this.maxTokens = maxTokens;       // e.g., 100
    this.refillRate = refillRate;       // tokens per second
  }

  async isAllowed(clientId) {
    const key = 'ratelimit:' + clientId;
    const now = Date.now();

    // Lua script for atomicity
    const script = \`
      local tokens = tonumber(redis.call('hget', KEYS[1], 'tokens') or ARGV[1])
      local lastRefill = tonumber(redis.call('hget', KEYS[1], 'ts') or ARGV[3])
      local elapsed = (tonumber(ARGV[3]) - lastRefill) / 1000
      tokens = math.min(tonumber(ARGV[1]), tokens + elapsed * tonumber(ARGV[2]))
      if tokens >= 1 then
        tokens = tokens - 1
        redis.call('hset', KEYS[1], 'tokens', tokens, 'ts', ARGV[3])
        redis.call('expire', KEYS[1], 60)
        return 1
      end
      return 0
    \`;

    const allowed = await this.redis.eval(
      script, 1, key, this.maxTokens, this.refillRate, now
    );
    return allowed === 1;
  }
}`,
      },
      {
        q: "Explain the Saga pattern for managing distributed transactions in microservices.",
        a: `The <strong>Saga Pattern</strong> manages data consistency across microservices without distributed transactions (2PC). Each saga is a sequence of local transactions where each step publishes an event/command triggering the next.<br><br>
<strong>Two types:</strong><br><br>
<strong>1. Choreography-based Saga:</strong><br>
• Each service listens for events and decides what to do next<br>
• Order Service → "OrderCreated" → Payment Service → "PaymentProcessed" → Inventory Service → "ItemReserved"<br>
• Pro: Decoupled, no central coordinator. Con: Hard to track, circular dependencies possible.<br><br>
<strong>2. Orchestration-based Saga:</strong><br>
• A central Saga Orchestrator tells each service what to do<br>
• Orchestrator → "Process Payment" → Payment Service → "Payment OK" → Orchestrator → "Reserve Inventory" → ...<br>
• Pro: Clear flow, easier to manage. Con: Orchestrator can become a bottleneck/SPOF.<br><br>
<strong>Compensating transactions:</strong> If any step fails, previous steps must be undone:<br>
• OrderCreated → PaymentProcessed → <strong>InventoryFailed</strong> → RefundPayment → CancelOrder<br><br>
<strong>When to use:</strong> When you need data consistency across services but can't use distributed transactions. E-commerce checkout, booking systems, banking transfers.`,
      },
      {
        q: "How would you design a notification system that handles millions of push notifications, emails, and SMS?",
        a: `<strong>Requirements:</strong> Multi-channel (push, email, SMS, in-app), millions of messages/day, templating, scheduling, delivery tracking, user preferences.<br><br>
<strong>Architecture:</strong><br><br>
<strong>1. API Layer:</strong><br>
• REST/gRPC endpoint: POST /notifications { userId, type, channel, templateId, data }<br>
• Validates request, checks user preferences, rate limits<br><br>
<strong>2. Message Queue (Kafka/SQS):</strong><br>
• Decouple request from delivery. Topic per channel: notification.email, notification.push, notification.sms<br>
• Priority queues for urgent vs batch notifications<br><br>
<strong>3. Workers per Channel:</strong><br>
• Email Worker → SendGrid/SES integration<br>
• Push Worker → FCM/APNs integration<br>
• SMS Worker → Twilio integration<br>
• Each worker handles retries with exponential backoff<br><br>
<strong>4. Template Engine:</strong><br>
• Store templates in DB with variables: "Hello {{userName}}, your order {{orderId}} is shipped"<br>
• Support i18n (multiple languages per template)<br><br>
<strong>5. Delivery Tracking:</strong><br>
• Store delivery status: queued → sent → delivered → read<br>
• Webhook callbacks from providers for delivery receipts<br><br>
<strong>6. User Preference Service:</strong><br>
• Users opt in/out of channels and notification types<br>
• Quiet hours (don't send push between 10PM-8AM user-local-time)<br><br>
<strong>Scale considerations:</strong> Partition Kafka by userId for ordering. Use Redis for deduplication (idempotency key). Dead letter queue for failed messages.`,
      },
    ],
    hard: [
      {
        q: "Design a distributed message queue like Kafka. What are the key architectural decisions?",
        a: `<strong>Core Requirements:</strong> High throughput (millions msg/sec), durability, fault tolerance, ordered delivery, consumer groups.<br><br>
<strong>Key Architectural Decisions:</strong><br><br>
<strong>1. Storage Engine:</strong><br>
• Append-only log files (sequential disk writes are fast — faster than random SSD writes)<br>
• Segment files with index: each topic-partition is a sequence of segments<br>
• Zero-copy transfer: sendfile() syscall to avoid user-space copying<br><br>
<strong>2. Partitioning:</strong><br>
• Each topic split into partitions for parallelism<br>
• Messages with same key go to same partition (ordering guarantee per partition)<br>
• Partition = unit of parallelism for consumers<br><br>
<strong>3. Replication:</strong><br>
• Each partition has N replicas across brokers<br>
• One leader (handles reads/writes), N-1 followers (replicate from leader)<br>
• ISR (In-Sync Replicas): followers that are caught up. Leader election from ISR only.<br>
• acks=all: wait for all ISR to confirm = strongest durability<br><br>
<strong>4. Consumer Groups:</strong><br>
• Each partition assigned to exactly one consumer in a group<br>
• Multiple groups can independently consume same topic (pub/sub)<br>
• Consumer offset tracking: consumer commits offset to mark progress<br><br>
<strong>5. Retention:</strong><br>
• Time-based (7 days default) or size-based retention<br>
• Log compaction: keep only latest value per key (for changelog topics)<br><br>
<strong>Trade-offs:</strong> Pull vs push (Kafka uses pull — consumers control pace). At-least-once vs exactly-once (exactly-once requires idempotent producers + transactional consumers).`,
      },
      {
        q: "How would you design a real-time chat system like WhatsApp/Slack supporting millions of concurrent users?",
        a: `<strong>Requirements:</strong> 1:1 and group messaging, real-time delivery, offline message storage, read receipts, typing indicators, media sharing, end-to-end encryption.<br><br>
<strong>Architecture:</strong><br><br>
<strong>1. Connection Layer:</strong><br>
• WebSocket servers for persistent bi-directional connections<br>
• Connection Service maps userId → which WebSocket server they're connected to<br>
• Use consistent hashing to distribute users across WS servers<br><br>
<strong>2. Message Flow (1:1):</strong><br>
• User A → WS Server → Message Service → check if User B online → direct to B's WS server → User B<br>
• If B offline → store in Message Queue → deliver when B reconnects<br><br>
<strong>3. Group Messaging:</strong><br>
• Small groups (< 100): Fan-out on write — message written to each member's inbox<br>
• Large groups/channels (1000+): Fan-out on read — store once, each reader fetches<br><br>
<strong>4. Storage:</strong><br>
• Message DB: Cassandra (wide column, write-optimized). Partition key: chatId, clustering key: timestamp<br>
• User/Group metadata: PostgreSQL<br>
• Media: S3 + CDN. Store reference in message, not actual file.<br><br>
<strong>5. Presence & Typing:</strong><br>
• Heartbeat every 10s to presence service (Redis with TTL)<br>
• Typing indicators: ephemeral, don't store — just relay through WS<br><br>
<strong>6. Read Receipts:</strong><br>
• Store per-user lastReadTimestamp per conversation<br>
• Batch updates to avoid write amplification<br><br>
<strong>Scale:</strong> 10M concurrent connections = ~1000 WS servers (10K connections each). Kafka for async message routing between services.`,
      },
      {
        q: "Explain consensus algorithms (Raft, Paxos) and why they matter in distributed systems.",
        a: `<strong>Consensus</strong> is the problem of getting all nodes in a distributed system to agree on a single value, even when some nodes fail.<br><br>
<strong>Why it matters:</strong> Leader election, distributed locks, replicated state machines (databases), configuration management.<br><br>
<strong>Paxos:</strong><br>
• Proposed by Leslie Lamport (1989). Three roles: Proposers, Acceptors, Learners.<br>
• Phase 1 (Prepare): Proposer sends prepare(n) to majority of acceptors. Acceptors promise not to accept proposals < n.<br>
• Phase 2 (Accept): If majority promised, proposer sends accept(n, value). Acceptors accept if no higher promise.<br>
• Notoriously hard to understand and implement correctly. Multi-Paxos for repeated consensus.<br><br>
<strong>Raft (easier to understand):</strong><br>
• Designed as understandable alternative to Paxos (2014, Ongaro & Ousterhout)<br>
• Three states: Leader, Follower, Candidate<br>
• <strong>Leader Election:</strong> Followers timeout → become Candidate → request votes → majority votes = new Leader<br>
• <strong>Log Replication:</strong> Leader accepts writes → appends to log → replicates to followers → committed when majority acknowledge<br>
• <strong>Safety:</strong> Leader has most up-to-date log (election restriction). Committed entries are never lost.<br>
• Terms: monotonically increasing term numbers prevent split-brain<br><br>
<strong>Used in:</strong> etcd (Raft), CockroachDB (Raft), Google Spanner (Paxos), ZooKeeper (ZAB — similar to Paxos).`,
      },
      {
        q: "Design a distributed cache like Redis Cluster. How do you handle consistency, partitioning, and failover?",
        a: `<strong>Requirements:</strong> Sub-millisecond reads, high throughput, data partitioning, replication, automatic failover, ~TB-scale data.<br><br>
<strong>1. Partitioning (Hash Slots):</strong><br>
• 16,384 hash slots distributed across master nodes<br>
• CRC16(key) % 16384 → slot → node mapping<br>
• Client-side routing: client caches slot→node mapping. MOVED/ASK redirects for rebalancing.<br><br>
<strong>2. Replication:</strong><br>
• Each master has 1+ replicas (async replication)<br>
• Replica receives replication stream of all master's write commands<br>
• Trade-off: Async = fast but possible data loss on master crash (last few writes)<br><br>
<strong>3. Failover:</strong><br>
• Replicas ping master. If majority of cluster marks master as PFAIL → FAIL<br>
• Replica with most data elected as new master (Raft-like voting among replicas)<br>
• Cluster config epoch incremented, slot mapping updated<br><br>
<strong>4. Consistency Model:</strong><br>
• Not strong consistency. Possible scenarios where acknowledged writes are lost.<br>
• WAIT command: block until N replicas acknowledge (tunable durability)<br><br>
<strong>5. Memory Management:</strong><br>
• Eviction policies: LRU, LFU, random, volatile-ttl<br>
• Lazy expiration (check on access) + active expiration (periodic sampling)<br>
• Memory fragmentation: jemalloc allocator, MEMORY DOCTOR diagnostics<br><br>
<strong>6. Hot Key Problem:</strong><br>
• One key getting millions of reads → single node bottleneck<br>
• Solution: Read replicas, client-side caching, key splitting (key_1, key_2, ... with client-side fan-out)`,
      },
      {
        q: "How would you design a search engine like Elasticsearch for full-text search at scale?",
        a: `<strong>Core Concepts:</strong><br><br>
<strong>1. Inverted Index:</strong><br>
• The fundamental data structure. Maps terms → list of document IDs containing that term.<br>
• "distributed" → [doc1, doc5, doc23]. "systems" → [doc1, doc8, doc23].<br>
• Query "distributed systems" → intersection of posting lists → [doc1, doc23]<br><br>
<strong>2. Text Analysis Pipeline:</strong><br>
• Character filters → Tokenizer → Token filters<br>
• "Running quickly!" → lowercase → "running quickly" → stemming → "run quick" → stop words removed<br><br>
<strong>3. Distributed Architecture:</strong><br>
• Index split into shards (each shard is a Lucene index)<br>
• Each shard replicated across nodes for fault tolerance<br>
• Coordinating node: receives query → fan-out to all shards → merge results → return<br><br>
<strong>4. Scoring (TF-IDF / BM25):</strong><br>
• <strong>TF:</strong> How often term appears in document (more = more relevant)<br>
• <strong>IDF:</strong> How rare term is across all documents (rarer = more important)<br>
• <strong>BM25:</strong> Improved version with document length normalization and term frequency saturation<br><br>
<strong>5. Near Real-Time Search:</strong><br>
• Documents → in-memory buffer → periodically flushed to immutable segments (1s default refresh)<br>
• Segment merging in background to reduce file count<br>
• Transaction log (translog) for durability before flush<br><br>
<strong>Scale:</strong> Thousands of shards across hundreds of nodes. Hot-warm-cold architecture: recent data on SSDs, older data on HDDs.`,
      },
      {
        q: "Design a payment processing system. How do you ensure exactly-once processing and handle failures?",
        a: `<strong>Requirements:</strong> Process payments reliably, prevent double charging, handle distributed failures, PCI DSS compliance, audit trail.<br><br>
<strong>Key Design Principles:</strong><br><br>
<strong>1. Idempotency:</strong><br>
• Every payment request includes a client-generated idempotency key<br>
• Server stores {idempotencyKey → result} in DB. Duplicate requests return cached result.<br>
• This is THE critical mechanism for exactly-once semantics.<br><br>
<strong>2. State Machine:</strong><br>
• Payment states: CREATED → PROCESSING → AUTHORIZED → CAPTURED → SETTLED (or FAILED/REFUNDED)<br>
• Each transition is a DB transaction with optimistic locking (version column)<br>
• Only valid transitions allowed (prevents double-capture)<br><br>
<strong>3. Two-Phase Processing:</strong><br>
• Phase 1 (Authorization): Reserve funds on card. No money moved yet.<br>
• Phase 2 (Capture): Actually charge the card. Can be immediate or delayed.<br>
• Separation allows order verification before charging.<br><br>
<strong>4. Failure Handling:</strong><br>
• <strong>Network timeout to payment gateway:</strong> Don't assume success OR failure. Query gateway for status. Retry with same idempotency key.<br>
• <strong>App crash mid-processing:</strong> Background reconciliation job compares our records with gateway records.<br>
• <strong>Dead letter queue:</strong> Failed messages after max retries → manual review queue.<br><br>
<strong>5. Ledger:</strong><br>
• Double-entry bookkeeping: Every transaction = debit + credit entries<br>
• Append-only ledger (never update/delete). Corrections via reversing entries.<br>
• Daily reconciliation between internal ledger and payment gateway reports.<br><br>
<strong>6. Security:</strong> PCI DSS — never store raw card numbers. Use tokenization (Stripe/Braintree vault). Encrypt at rest, TLS in transit.`,
        example: `// Idempotent payment processing
async function processPayment(request) {
  const { idempotencyKey, amount, currency, cardToken } = request;

  // Check for existing result
  const existing = await db.findByIdempotencyKey(idempotencyKey);
  if (existing) return existing.result; // Return cached result

  // Create payment record
  const payment = await db.createPayment({
    id: generateUUID(),
    idempotencyKey,
    amount, currency,
    status: 'CREATED',
    version: 1
  });

  try {
    // Authorize with payment gateway
    const authResult = await gateway.authorize({
      amount, currency, cardToken,
      merchantRef: payment.id
    });

    // Optimistic lock update
    await db.updatePayment(payment.id, {
      status: 'AUTHORIZED',
      gatewayRef: authResult.id,
      version: 2  // Will fail if version != 1
    });

    return { success: true, paymentId: payment.id };
  } catch (error) {
    await db.updatePayment(payment.id, { status: 'FAILED', error: error.message });
    throw error;
  }
}`,
      },
      {
        q: "What is the CQRS pattern and when should you use it? How does it relate to Event Sourcing?",
        a: `<strong>CQRS (Command Query Responsibility Segregation)</strong> separates the read model (Query) from the write model (Command) into different data stores optimized for their purpose.<br><br>
<strong>Why:</strong><br>
• Read and write workloads have different requirements. Reads need fast denormalized data. Writes need normalized, consistent data.<br>
• In a typical app, reads outnumber writes 10:1 to 1000:1. Separate scaling.<br><br>
<strong>Architecture:</strong><br>
• <strong>Command Side:</strong> Handles create/update/delete. Normalized relational DB. Strong consistency. Validates business rules.<br>
• <strong>Query Side:</strong> Handles reads. Denormalized views (materialized views, ElasticSearch, Redis). Optimized for specific query patterns.<br>
• <strong>Sync:</strong> Events published from command side → consumed by query side to update read models. Eventually consistent.<br><br>
<strong>CQRS + Event Sourcing:</strong><br>
• Event Sourcing: Store state as a sequence of events, not current state. "OrderPlaced", "ItemAdded", "OrderShipped"<br>
• Current state = replay all events from beginning (or from snapshot + subsequent events)<br>
• CQRS reads from projected read models built from events. Perfect fit.<br>
• Audit trail is free (events are the audit log)<br><br>
<strong>When to use:</strong><br>
• High read:write ratio with different read patterns<br>
• Complex domain logic where write model differs significantly from read model<br>
• When you need audit trail / time travel (event sourcing)<br>
• When you need independent scaling of reads and writes<br><br>
<strong>When NOT to use:</strong> Simple CRUD apps, small scale, team unfamiliar with eventual consistency patterns.`,
      },
      {
        q: "How do you approach capacity estimation and back-of-the-envelope calculations in system design interviews?",
        a: `<strong>Framework for estimation:</strong><br><br>
<strong>1. Start with users and traffic:</strong><br>
• DAU (Daily Active Users) → requests/day → requests/second<br>
• Example: 10M DAU, each makes 20 requests/day = 200M req/day ≈ 2,300 req/s average<br>
• Peak = 2-5x average → ~10K req/s peak<br><br>
<strong>2. Storage estimation:</strong><br>
• Per-record size × records/day × retention period<br>
• Example: 1KB per message × 100M messages/day × 365 days = 36.5 TB/year<br><br>
<strong>3. Bandwidth:</strong><br>
• Requests/second × average request size<br>
• Incoming: 2,300 req/s × 1KB = 2.3 MB/s<br>
• Outgoing: typically 10x incoming (reads > writes)<br><br>
<strong>4. Memory/Cache estimation (80/20 rule):</strong><br>
• Cache 20% of daily data that handles 80% of reads<br>
• 200M requests × 1KB = 200GB daily data → cache ~40GB<br><br>
<strong>Key numbers to memorize:</strong><br>
• 1 day = 86,400 seconds ≈ 100K seconds<br>
• 1M req/day ≈ 12 req/s<br>
• 1 server handles ~10K concurrent connections<br>
• SSD read: 0.1ms, HDD read: 10ms, Network RTT (same DC): 0.5ms, Cross-continent: 150ms<br>
• 1 char = 1 byte, 1 int = 4 bytes, 1 long/timestamp = 8 bytes<br>
• Redis: handle ~100K ops/s per instance<br>
• Postgres: handle ~10K queries/s (depends on complexity)`,
      },
    ],
  },
};
