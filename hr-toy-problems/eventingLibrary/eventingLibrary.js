/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

var mixEvents = function (obj) {
  obj.events = [];
  obj.on = function (name, fn) {
    this.events.push({ name, fn });
  };
  obj.trigger = function (...args) {
    const eventName = args.slice(0, 1).join();
    for (const event of this.events) {
      if (event.name === eventName) {
        event.fn.apply(this, args.slice(1));
      }
    }
  };
  return obj;
};

// var obj = mixEvents({ name: 'Alice', age: 30 });
// obj.on('ageChange', function () {
//   // On takes an event name and a callback function
//   console.log('Age changed');
//   obj.age += 1;
// });
// obj.trigger('ageChange');
// // expect(obj.age).toBe(31);

// console.log('outcome:', obj.age === 31);

try {
  module.exports = mixEvents;
} catch (err) {
  console.error(err);
}
