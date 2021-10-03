function ascii_deletion_distance(str1, str2) {
  let dif = [],
    longStr,
    shortStr;
  str1.length >= str2.length ? (longStr = str1) : (longStr = str2);
  longStr === str1 ? (shortStr = str2) : (shortStr = str1);
  for (let i = 0; i < longStr.length; i++) {
    if (longStr.includes(shortStr[i])) {
      dif.push(shortStr[i]);
    }
  }
  let sum = 0;
  for (let i = 0; i < dif.length; i++) {
    sum += dif[i].charCodeAt();
  }
  return sum;
}
