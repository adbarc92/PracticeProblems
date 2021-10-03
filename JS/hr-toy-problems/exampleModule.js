const arithmetic = {
  add: function (a, b) {
    return a + b;
  },

  multiply: function (a, b) {
    return a * b;
  },
};

try {
  module.exports = arithmetic;
} catch (err) {
  console.error(err);
}
