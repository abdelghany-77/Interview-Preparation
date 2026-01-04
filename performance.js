/**
 * Performance Optimization Utilities
 * Advanced performance enhancements for the Interview Preparation website
 */

// Intersection Observer for lazy loading elements
const createLazyObserver = () => {
  if (!("IntersectionObserver" in window)) return null;

  return new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;

          // Lazy load images
          if (element.dataset.src) {
            element.src = element.dataset.src;
            element.removeAttribute("data-src");
          }

          // Lazy load background images
          if (element.dataset.bg) {
            element.style.backgroundImage = `url(${element.dataset.bg})`;
            element.removeAttribute("data-bg");
          }

          // Add loaded class for animations
          element.classList.add("lazy-loaded");
          observer.unobserve(element);
        }
      });
    },
    {
      rootMargin: "50px 0px",
      threshold: 0.01,
    }
  );
};

// Initialize lazy loading
const initLazyLoading = () => {
  const lazyObserver = createLazyObserver();
  if (!lazyObserver) return;

  // Observe all elements with data-src or data-bg
  document.querySelectorAll("[data-src], [data-bg]").forEach((element) => {
    lazyObserver.observe(element);
  });

  // Observe question cards for animations
  document.querySelectorAll(".question-card").forEach((card) => {
    lazyObserver.observe(card);
  });
};

// Virtualized scrolling for large lists
class VirtualScroller {
  constructor(container, items, renderItem, itemHeight = 100) {
    this.container = container;
    this.items = items;
    this.renderItem = renderItem;
    this.itemHeight = itemHeight;
    this.visibleStart = 0;
    this.visibleEnd = 0;
    this.scrollTop = 0;
    this.containerHeight = 0;

    this.init();
  }

  init() {
    this.containerHeight = this.container.clientHeight;
    this.container.style.position = "relative";
    this.container.style.overflow = "auto";

    // Create viewport
    this.viewport = document.createElement("div");
    this.viewport.style.position = "absolute";
    this.viewport.style.top = "0";
    this.viewport.style.left = "0";
    this.viewport.style.right = "0";

    // Create spacer
    this.spacer = document.createElement("div");
    this.spacer.style.height = `${this.items.length * this.itemHeight}px`;

    this.container.innerHTML = "";
    this.container.appendChild(this.spacer);
    this.container.appendChild(this.viewport);

    // Add scroll listener with throttle
    let ticking = false;
    this.container.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            this.onScroll();
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );

    this.render();
  }

  onScroll() {
    this.scrollTop = this.container.scrollTop;
    this.render();
  }

  render() {
    this.visibleStart = Math.floor(this.scrollTop / this.itemHeight);
    this.visibleEnd = Math.ceil(
      (this.scrollTop + this.containerHeight) / this.itemHeight
    );

    // Add buffer
    const bufferSize = 3;
    this.visibleStart = Math.max(0, this.visibleStart - bufferSize);
    this.visibleEnd = Math.min(this.items.length, this.visibleEnd + bufferSize);

    // Clear viewport
    this.viewport.innerHTML = "";

    // Render visible items
    for (let i = this.visibleStart; i < this.visibleEnd; i++) {
      const item = this.items[i];
      const element = this.renderItem(item, i);
      element.style.position = "absolute";
      element.style.top = `${i * this.itemHeight}px`;
      element.style.left = "0";
      element.style.right = "0";
      this.viewport.appendChild(element);
    }
  }

  update(items) {
    this.items = items;
    this.spacer.style.height = `${this.items.length * this.itemHeight}px`;
    this.render();
  }
}

// Web Workers for heavy computations
const createSearchWorker = () => {
  const workerCode = `
    self.addEventListener('message', (e) => {
      const { questions, searchTerm } = e.data;
      const results = questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.problemStatement?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.approach?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      self.postMessage(results);
    });
  `;

  const blob = new Blob([workerCode], { type: "application/javascript" });
  return new Worker(URL.createObjectURL(blob));
};

// Request Idle Callback polyfill
const requestIdleCallback =
  window.requestIdleCallback ||
  function (cb) {
    const start = Date.now();
    return setTimeout(() => {
      cb({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
      });
    }, 1);
  };

const cancelIdleCallback =
  window.cancelIdleCallback ||
  function (id) {
    clearTimeout(id);
  };

// Batch DOM updates
class DOMBatcher {
  constructor() {
    this.queue = [];
    this.running = false;
  }

  add(fn) {
    this.queue.push(fn);
    if (!this.running) {
      this.running = true;
      requestAnimationFrame(() => this.flush());
    }
  }

  flush() {
    const batch = this.queue.splice(0);
    batch.forEach((fn) => fn());
    this.running = false;
  }
}

// Memory-efficient event delegation
const delegate = (selector, event, handler) => {
  document.addEventListener(
    event,
    (e) => {
      const target = e.target.closest(selector);
      if (target) {
        handler.call(target, e);
      }
    },
    { passive: event === "scroll" || event === "touchmove" }
  );
};

// Performance monitoring
const performanceMonitor = {
  marks: {},

  start(name) {
    this.marks[name] = performance.now();
  },

  end(name) {
    if (this.marks[name]) {
      const duration = performance.now() - this.marks[name];
      console.log(`⚡ ${name}: ${duration.toFixed(2)}ms`);
      delete this.marks[name];
      return duration;
    }
  },

  measure(name, fn) {
    this.start(name);
    const result = fn();
    this.end(name);
    return result;
  },

  async measureAsync(name, fn) {
    this.start(name);
    const result = await fn();
    this.end(name);
    return result;
  },
};

// Cache API helper
const cacheHelper = {
  async get(key) {
    if (!("caches" in window)) return null;
    const cache = await caches.open("interview-prep-v1");
    const response = await cache.match(key);
    return response ? await response.json() : null;
  },

  async set(key, data) {
    if (!("caches" in window)) return;
    const cache = await caches.open("interview-prep-v1");
    const response = new Response(JSON.stringify(data));
    await cache.put(key, response);
  },
};

// Preload critical resources
const preloadResource = (url, as) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.href = url;
  link.as = as;
  document.head.appendChild(link);
};

// Prefetch next page
const prefetchPage = (url) => {
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = url;
  document.head.appendChild(link);
};

// Connection quality detection
const getConnectionQuality = () => {
  if (!("connection" in navigator)) return "unknown";

  const connection = navigator.connection;
  const type = connection.effectiveType; // '4g', '3g', '2g', 'slow-2g'
  const downlink = connection.downlink; // Mbps
  const rtt = connection.rtt; // Round-trip time in ms

  if (type === "4g" && downlink > 5) return "fast";
  if (type === "4g" || type === "3g") return "medium";
  return "slow";
};

// Adaptive loading based on connection
const adaptiveLoad = () => {
  const quality = getConnectionQuality();

  switch (quality) {
    case "fast":
      // Load all features
      initLazyLoading();
      break;
    case "medium":
      // Load with some optimizations
      initLazyLoading();
      break;
    case "slow":
      // Minimal loading
      console.log("Slow connection detected, using minimal resources");
      break;
  }
};

// Export utilities
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    createLazyObserver,
    initLazyLoading,
    VirtualScroller,
    createSearchWorker,
    requestIdleCallback,
    cancelIdleCallback,
    DOMBatcher,
    delegate,
    performanceMonitor,
    cacheHelper,
    preloadResource,
    prefetchPage,
    getConnectionQuality,
    adaptiveLoad,
  };
}

// Initialize on load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    adaptiveLoad();
  });
} else {
  adaptiveLoad();
}
