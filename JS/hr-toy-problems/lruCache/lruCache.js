/*
 * Design and implement an LRU, or Least Recently Used, cache.
 *
 * An LRU cache gives O(1) get(key) and set(key, val) operations,
 * much like a hashtable, but once it reaches its limit for stored
 * number of items, removes the least recently used (i.e. the oldest
 * by get-date) item from the cache in O(1) time.
 *
 * For instance:
 *
 * var cache = new LRUCache(3); // limit of 3 items
 * cache.set("item1", 1);
 * cache.set("item2", 2);
 * cache.set("item3", 3);
 * cache.set("item4", 4);
 *
 * cache.get("item3") //=> 3
 * cache.get("item2") //=> 2
 * // item1 was removed because it was the oldest item by insertion/usage
 * cache.get("item1") //=> null
 *
 * // item4 is removed to make room, because it is the oldest by usage,
 * // which takes priority.
 * cache.set("item5", 5);
 *
 * // item3 is also removed, because it was retrieved before item2 was
 * // last retrieved.
 * cache.set("item6", 6);
 *
 * You will need a doubly-linked list (provided).
 */

var LRUCache = function (limit) {
  this.cache = {};
  this.recencyList = new List();
  this.limit = limit;
};

var LRUCacheItem = function (val, key) {
  this.key = key;
  this.val = val;
};

LRUCache.prototype.size = function () {
  return Object.keys(this.cache).length;
};

LRUCache.prototype.hash = function (key) {
  return key; // * Advanced technology
};

LRUCache.prototype.get = function (key) {
  // If something is accessed, it should be removed from its previous list spot and inserted at the front
  debugger;
  const result = this.cache[this.hash(key)];
  if (result !== undefined) {
    const node = this.recencyList.getNodeByKey(result.key);
    if (node) {
      // * Why is this necessary?
      this.recencyList.moveToFront(node);
    }
    return result.val;
  } else {
    return null;
  }
};

LRUCache.prototype.set = function (val, key) {
  const newItem = new LRUCacheItem(val, key);
  // Check if a value needs to be deleted
  if (this.size() === this.limit) {
    //	If so, delete value
    const valToDel = this.recencyList.pop();
    delete this.cache[this.hash(valToDel)];
  }
  // New nodes are added at the front
  this.cache[this.hash(key)] = newItem;
  this.recencyList.unshift(key);
};

var List = function () {
  this.head = null;
  this.tail = null;
};

var ListNode = function (prev, val, next) {
  this.prev = prev || null;
  this.val = val;
  this.next = next || null;
};

// Insert at the head of the list.
List.prototype.unshift = function (val) {
  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = new ListNode(null, val, null);
    // Not empty list.
  } else {
    this.head = new ListNode(null, val, this.head);
    this.head.next.prev = this.head;
  }

  return this.head;
};

// Delete at the head of the list.
List.prototype.shift = function () {
  // Empty list
  if (this.head === null && this.tail === null) {
    return null;
    // Not empty list.
  } else {
    var head = this.head;
    this.head = this.head.next;
    head.delete();
    return head.val;
  }
};

// Insert at the end of the list.
List.prototype.push = function (val) {
  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = new ListNode(null, val, null);
    // Not empty list.
  } else {
    this.tail = new ListNode(this.tail, val, null);
    this.tail.prev.next = this.tail;
  }

  return this.tail;
};

// Delete at the end of the list.
List.prototype.pop = function () {
  // Empty list
  if (this.head === null && this.tail === null) {
    return null;
    // Not empty list.
  } else {
    var tail = this.tail;
    this.tail = this.tail.prev;
    tail.delete();
    return tail.val;
  }
};

List.prototype.getNodeByKey = function (key) {
  let node = this.head;
  if (!node) {
    return null;
  }
  while (node) {
    if (node.val === key) {
      return node;
    }
    node = node.next;
  }
  return null;
};

// Move a node to the front of the List
List.prototype.moveToFront = function (node) {
  if (node === this.tail) {
    this.pop();
  } else if (node === this.head) {
    return;
  } else {
    node.delete();
  }

  node.prev = node.next = null;

  // Don't delegate to shift, since we want to keep the same
  // object.

  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = node;
    // At least one node.
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
};

// Move a node to the end of the List
List.prototype.moveToEnd = function (node) {
  if (node === this.head) {
    this.shift();
  } else if (node === this.tail) {
    return;
  } else {
    node.delete();
  }

  // Don't delegate to push, since we want to keep the same
  // object.

  node.prev = node.next = null;

  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = node;
    // At least one node.
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};

ListNode.prototype.delete = function () {
  if (this.prev) {
    this.prev.next = this.next;
  }
  if (this.next) {
    this.next.prev = this.prev;
  }
};

const cache2 = new LRUCache(10);

for (var i = 0; i < 8; i++) {
  cache2.set(i, i);
}

cache2.get(0);

for (i = 8; i < 14; i++) {
  cache2.set(i, i);
}

try {
  module.exports = LRUCache;
} catch (err) {
  console.error(err);
}
