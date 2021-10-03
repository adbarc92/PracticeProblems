function getByteMax(byteLength) {
  let ret = 0;
  for (let i = byteLength; i >= 0; i--) {
    ret += 2 ** i;
  }
  return ret;
}

function IntStorage(byteLength, ints) {
  // ...
  // byteLength should be optional
  if (!byteLength) {
    byteLength = 32;
  } else if (byteLength < 0 || byteLength > 32) {
    throw 'Invalid byteLength';
  }

  if (ints) {
    // Check if ints array is of zero or more integer values
    if (ints.length >= 0) {
      // Check if each int is smaller than the byteLength
      const byteMax = getByteMax(byteLength);
      for (let i = 0; i < ints.length; i++) {
        if (ints[i] > byteMax) {
          throw 'Invalid ints';
        }
      }
    } else {
      throw 'Invalid ints';
    }
  }
  // return { length: ints.length * byteLength };
  return new Object({ length: ints.length * byteLength, ints });
}
IntStorage.prototype.read = function (from, count) {
  // ...
};
