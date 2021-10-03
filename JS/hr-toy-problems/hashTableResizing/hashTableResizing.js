/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
const getIndexBelowMaxForKey = function (str, max) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

const makeHashTable = function () {
  const result = {};
  let storage = [];
  let storageLimit = 4;
  let size = 0;

  result.insert = function (k, v) {
    if (size >= storageLimit * 0.75) {
      result.rehashToSize(storageLimit * 2);
    } else if (size <= storageLimit * 0.25) {
      result.rehashToSize(storageLimit * 0.5);
    }
    const index = getIndexBelowMaxForKey(k);
    storage[index] = [k, v];
    size++;
  };

  result.retrieve = function (k) {
    const index = getIndexBelowMaxForKey(k);
    return result.storage[index][1];
  };

  result.remove = function (k) {
    const index = getIndexBelowMaxForKey(k);
    const val = result.storage[index][1];
    delete result.storage[index][1];
    return val;
  };

  result.rehashToSize = function (newSize) {
    const oldStorage = storage;
    const newStorage = [];
    storageLimit = newSize;
    size = 0;
    for (let i = 0; i < oldStorage.length; i++) {
      if (oldStorage[i]) {
        const [k, v] = oldStorage[i];
        const index = getIndexBelowMaxForKey(k);
        newStorage[index] = [k, v];
        size++;
      }
    }
    storage = newStorage;
  };

  return result;
};

try {
  module.exports = makeHashTable;
} catch (err) {
  console.error(err);
}

