/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function (str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function () {
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function (key, value) {
    const hashKey = getIndexBelowMaxForKey(key, storageLimit);
    try {
      const spot = storage[hashKey];
      // console.log('spot:', spot);
      if (!spot) {
        storage[hashKey] = { key, value };
        return true;
      } else {
        throw new Error('Uh, sir? We\'re over-hashed.');
      }
    } catch (e) {
      // console.error(e);
      return false;
    }
  };

  result.retrieve = function (key) {
    const hashKey = getIndexBelowMaxForKey(key, storageLimit);
    const spot = storage[hashKey];
    if (spot) {
      return spot.value;
    } else {
      return null;
    }
  };

  result.remove = function (key) {
    const hashKey = getIndexBelowMaxForKey(key, storageLimit);
    const spot = storage[hashKey];
    if (spot) {
      delete storage[hashKey].value;
      return true;
    } else {
      return false;
    }
  };

  result.valueExists = function (value) {
    for (let i = 0; i < storage.length; i++) {
      if (storage[i] === value) {
        return true;
      }
    }
    return false;
  };

  // result.resize = function (newSize) {};

  return result;
};

try {
  module.exports = makeHashTable;
} catch (err) {
  console.error(err);
}
