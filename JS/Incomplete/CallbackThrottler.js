function throttle(wait, onLast, onFirst, interval, timestamps) {
  if (onLast && onFirst) {
    const ret = [];
    let cluster = false;
    // let iterator;
    // interval === 0 ? (iterator = wait) : (iterator = interval);
    for (let i = 0; i < timestamps.length; i++) {
      if (cluster === false) {
        ret.push(timestamps[i]);
      } else {
        if (interval > 0) {
          for (let j = timestamps[i]; j <= timestamps[i] + wait; j += interval) {
            ret.push(j);
          }
        } else {
          ret.push(timestamps[i] + wait);
        }
      }
      if (timestamps[i + 1] - timestamps[i] < wait) {
        cluster = true;
      } else {
        cluster = false;
      }
      if (i === timestamps.length - 1) {
        if (interval > 0) {
          for (let j = timestamps[i] + interval; j < timestamps[i] + wait; j += interval) {
            ret.push(j);
          }
          ret.push(timestamps[i] + wait);
        } else {
          ret.push(timestamps[i] + wait);
        }
      }
    }
    return ret;
  } else if (onLast && !onFirst) {
    let ret = [];
    for (let i = 0; i < timestamps.length; i++) {
      if (timestamps[i + 1] - timestamps[i] > wait) {
        ret.push(timestamps[i] + wait);
      }
      if (i === timestamps.length - 1) {
        ret.push(timestamps[i] + wait);
      }
    }
    return ret;
  } else if (!onLast && onFirst) {
    const ret = [0];
    let cluster = true;
    for (let i = 1; i < timestamps.length; i++) {
      if (timestamps[i] - timestamps[i - 1] < wait && !cluster) {
        ret.push(timestamps[i]);
        cluster = true;
      }
      if (cluster === true) {
        if (interval > 0 && timestamps[i] % interval === 0) {
          ret.push(timestamps[i] - (timestamps[i] % interval));
        }
      }
      if (timestamps[i] - timestamps[i - 1] >= wait) {
        cluster = false;
      }
      if (timestamps[i] - timestamps[i - 1] > wait && timestamps[i + 1] === undefined) {
        ret.push(timestamps[i]);
      }
    }
    return ret;
  }
}

console.log(throttle(20, false, true, 0, [0, 10, 20, 30]));
console.log(throttle(20, true, false, 0, [0, 10, 20, 30]));
console.log(throttle(20, false, true, 20, [0, 10, 20, 30]));
console.log(throttle(20, false, true, 0, [0, 10, 40]));
console.log(throttle(20, true, false, 0, [0, 10, 40]));
console.log(throttle(20, true, true, 0, [0, 10, 50]));
console.log(throttle(20, true, true, 10, [0, 10, 50]));
