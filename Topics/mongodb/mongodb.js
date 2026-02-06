const questions = {
  mongodb: {
    easy: [
      {
        q: "What is the difference between SQL and NoSQL databases?",
        a: "SQL databases are relational, table-based, and use structured query language (SQL). They are ACID-compliant and suited for structured data and complex queries. NoSQL databases are non-relational, flexible, and can store data in formats like key-value, document, graph, or column. They prioritize scalability and performance for large, unstructured datasets.",
      },
      {
        q: "Why did we create NoSQL databases?",
        a: "To handle scalability, flexibility, and performance challenges from massive and unstructured data, especially for real-time and distributed web apps.",
      },
      {
        q: "Give examples of SQL and NoSQL databases.",
        a: "SQL: MySQL, PostgreSQL, Oracle, SQL Server. NoSQL: MongoDB, Cassandra, Redis, CouchDB.",
      },
      {
        q: "Explain MongoDB structure.",
        a: "Database → Collections → Documents. Database: top-level container. Collection: similar to tables but schema-less. Document: JSON-like key-value pairs (stored as BSON).",
      },
      {
        q: "What are collections in MongoDB?",
        a: "Collections are groups of documents, like tables in SQL.",
      },
      {
        q: "What is a document in MongoDB?",
        a: "A document is a BSON (Binary JSON) record — a set of key-value pairs.",
      },
      {
        q: "How do you create a database?",
        a: "Use 'use <databaseName>'. MongoDB creates it automatically once data is stored.",
      },
      {
        q: "What is the primary key in MongoDB?",
        a: "_id — unique for every document, automatically generated.",
      },
      {
        q: "How do you insert data?",
        a: "db.collection.insertOne() or insertMany().",
        example: `// Insert single document
db.users.insertOne({
  name: "John",
  email: "john@example.com",
  age: 25
});

// Insert multiple documents
db.users.insertMany([
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" }
]);`,
      },
      {
        q: "How do you delete documents?",
        a: "db.collection.deleteOne() or deleteMany().",
      },
      {
        q: "How do you list all databases?",
        a: "show dbs.",
      },
      {
        q: "How do you limit query results?",
        a: "Use .limit(<number>).",
      },
      {
        q: "How is data stored on disk?",
        a: "In BSON format, optimized for speed and efficient reading.",
      },
      {
        q: "What does find() return? What is a cursor?",
        a: "Returns a cursor, an iterator object pointing to query results. By default, it returns 20 documents per batch.",
      },
      {
        q: "What are the types of indexes?",
        a: "Single field, compound, multikey, text, geospatial.",
      },
      {
        q: "How can we make an update query insert if not found?",
        a: "Add { upsert: true } in the options object.",
      },
      {
        q: "What are cursor functions?",
        a: "Functions applied to cursor objects like .sort(), .limit(), .forEach().",
      },
      {
        q: "Structure of the find command?",
        a: "find({filter}, {projection}, {options}).",
        example: `// Find all documents
db.users.find();

// Find with filter
db.users.find({ age: { $gt: 21 } });

// Find with projection (only show name and email)
db.users.find(
  { age: { $gt: 21 } },
  { name: 1, email: 1, _id: 0 }
);

// With options (sort and limit)
db.users.find({ age: { $gt: 21 } })
  .sort({ name: 1 })
  .limit(10);`,
      },
      {
        q: "What is aggregation and why pipeline?",
        a: "Aggregation processes documents in stages (pipeline). Each stage's output is input for the next — used for analytics and transformations.",
        example: `db.orders.aggregate([
  // Stage 1: Filter documents
  { $match: { status: "completed" } },
  
  // Stage 2: Group by customer
  { $group: {
    _id: "$customerId",
    totalSpent: { $sum: "$amount" },
    orderCount: { $sum: 1 }
  }},
  
  // Stage 3: Sort by total spent
  { $sort: { totalSpent: -1 } },
  
  // Stage 4: Limit results
  { $limit: 5 }
]);`,
      },
      {
        q: "What does explain() do?",
        a: "Shows query execution plan — e.g., index usage, stages, time.",
      },
      {
        q: "Can we modify _id field?",
        a: "No, it's immutable.",
      },
      {
        q: "Does MongoDB have views?",
        a: "Yes, use db.createView().",
      },
      {
        q: "Difference between findOneAndUpdate and updateOne?",
        a: "findOneAndUpdate() returns the updated document, updateOne() returns a status acknowledgment.",
      },
      {
        q: "Difference between $set and $unset?",
        a: "$set updates or adds fields; $unset removes them.",
      },
    ],
    intermediate: [
      {
        q: "How to improve query performance?",
        a: "Indexing, caching, and query optimization.",
      },
      {
        q: "Can you $push and $pull in the same query?",
        a: "No.",
      },
      {
        q: "Can you $set and $unset the same field in one query?",
        a: "No.",
      },
      {
        q: "Explain ACID transactions.",
        a: "Atomicity, Consistency, Isolation, Durability — ensure reliable transactions.",
      },
      {
        q: "Difference between embedded documents and references?",
        a: "Embedded: store data directly inside a document (better for reads). References: store links (IDs) to other documents (better for modular design).",
        example: `// EMBEDDED DOCUMENTS (Denormalized)
// Good for: One-to-few relationships, data frequently accessed together
db.users.insertOne({
  name: "John",
  email: "john@example.com",
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
  },
  orders: [
    { orderId: 1, product: "Laptop", price: 1200 },
    { orderId: 2, product: "Mouse", price: 25 }
  ]
});

// Single query to get all data
db.users.findOne({ name: "John" }); // Gets user + address + orders

// REFERENCES (Normalized)
// Good for: One-to-many or many-to-many, data updated frequently
db.users.insertOne({
  _id: ObjectId("123"),
  name: "John",
  email: "john@example.com"
});

db.orders.insertMany([
  { userId: ObjectId("123"), product: "Laptop", price: 1200 },
  { userId: ObjectId("123"), product: "Mouse", price: 25 }
]);

// Requires multiple queries or $lookup (join)
const user = db.users.findOne({ _id: ObjectId("123") });
const orders = db.orders.find({ userId: ObjectId("123") }).toArray();

// Or use aggregation $lookup
db.users.aggregate([
  { $match: { _id: ObjectId("123") } },
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "orders"
    }
  }
]);

// When to use each:
// Embedded: Blog post with comments (few comments per post)
// References: Social media posts with likes (millions of likes)`,
      },
      {
        q: "What are virtual properties in Mongoose?",
        a: "Non-persisted properties used for computed or derived values.",
      },
      {
        q: "Would Mongo use index scan if only _id index exists?",
        a: "No, unless the query filters by _id.",
      },
      {
        q: "What is a covered query?",
        a: "Query where all required fields are within the index (no disk fetch needed).",
      },
      {
        q: "What is a single-field multikey index?",
        a: "An index on an array field (one index entry per array element).",
      },
      {
        q: "Can we create an empty document?",
        a: "Yes — db.collection.insertOne({}) creates an empty document with _id.",
      },
      {
        q: "Are insertMany and updateMany atomic?",
        a: "insertMany() is atomic by default (use { ordered: true } to change), updateMany() is not.",
      },
      {
        q: "What is in-memory sort?",
        a: "Sorting done in server memory; can be avoided by indexing sort fields.",
      },
      {
        q: "Mention some array operators.",
        a: "$addToSet, $push, $pull, $pop.",
      },
      {
        q: "Difference between $pull and $pop?",
        a: "$pop removes first or last element, $pull removes specific matching elements.",
      },
      {
        q: "How to search using text index?",
        a: "db.collection.find({ $text: { $search: 'mongodb database' } }).",
      },
      {
        q: "Importance of order in compound index?",
        a: "The index order affects how efficiently queries can use it (prefix rule).",
      },
    ],
    hard: [
      {
        q: "How to maintain high availability?",
        a: "Through replication or sharding.",
      },
      {
        q: "Explain MongoDB replication architecture.",
        a: "A replica set has one primary node and multiple secondary nodes for redundancy and failover.",
      },
      {
        q: "What is sharding, and why is key selection crucial?",
        a: "Sharding splits data across multiple servers for scalability. Choosing the right shard key avoids uneven data distribution and bottlenecks.",
        example: `// SHARDING: Horizontal partitioning of data across multiple servers

// Enable sharding on database
sh.enableSharding("mydb");

// Choose shard key (VERY IMPORTANT!)
// BAD shard key: incrementing ID (all writes go to one shard)
sh.shardCollection("mydb.users", { _id: 1 }); // ❌ Poor choice

// GOOD shard key: high cardinality, even distribution
sh.shardCollection("mydb.users", { email: "hashed" }); // ✅ Better
sh.shardCollection("mydb.orders", { customerId: 1, orderDate: 1 }); // ✅ Compound

// Example data distribution:
// Shard 1: emails starting with a-h
// Shard 2: emails starting with i-p
// Shard 3: emails starting with q-z

// Shard key requirements:
// 1. High cardinality (many unique values)
// 2. Even distribution (no hotspots)
// 3. Query isolation (queries target specific shards)

// Bad shard keys:
// - Monotonically increasing (_id, timestamp) → all writes to one shard
// - Low cardinality (country, status) → uneven distribution
// - Frequently updated fields → migration overhead

// Good shard keys:
// - Hashed _id
// - User ID in multi-tenant app
// - Combination of user + timestamp

// Query with shard key (targeted - fast)
db.users.find({ email: "john@example.com" });
// Only queries one shard

// Query without shard key (broadcast - slow)
db.users.find({ name: "John" });
// Queries ALL shards (scatter-gather)

// Sharding architecture:
// Config servers: Store metadata
// Mongos routers: Route queries to correct shard
// Shards: Store actual data`,
      },
      {
        q: "Difference between horizontal and vertical scaling?",
        a: "Horizontal: add more machines. Vertical: add more power (CPU, RAM) to one machine.",
      },
      {
        q: "Difference between JSON and BSON?",
        a: "JSON is human-readable text; BSON is binary, faster, and supports more data types.",
      },
      {
        q: "Difference between cursor.count() and countDocuments()?",
        a: "cursor.count() counts in-memory results; countDocuments() counts from disk (more accurate).",
      },
      {
        q: "When should you add or avoid indexes?",
        a: "Add indexes for selective queries. Avoid if queries scan >70% of documents — collection scan might be faster.",
      },
      {
        q: "What are capped collections?",
        a: "Fixed-size collections that overwrite oldest data when full.",
      },
      {
        q: "In multikey index, can we search by second field only?",
        a: "No — must follow the index prefix.",
      },
      {
        q: "Backup and restore utilities?",
        a: "mongoimport, mongoexport, mongodump, mongorestore.",
      },
      {
        q: "Read & Write concerns?",
        a: "Control consistency and durability. Write concern: { w, j, wtimeout }. Read concern: { level }.",
      },
      {
        q: "Difference between journal (WAL) and oplog?",
        a: "Journal: write-ahead log for durability. Oplog: records all operations for replication.",
      },
      {
        q: "What is TDD (Test-Driven Development)?",
        a: "Development approach where tests are written before code implementation.",
      },
      {
        q: "What are types of testing?",
        a: "Unit, integration, system, acceptance, regression.",
      },
      {
        q: "What is a memory leak?",
        a: "When memory is not released after being used, causing reduced performance.",
      },
      {
        q: "Common caching strategies in HTTP APIs?",
        a: "Cache-Control, ETags, Redis caching, CDN edge caching.",
      },
      {
        q: "What is 'Definition of Done (DoD)'?",
        a: "A clear checklist that defines when a feature is considered complete, including testing, documentation, and review.",
      },
    ],
  },
};
