ScrambleWords = function(str) {
  rest.sort((a, b) => {
    return a > b ? 1 : -1;
  });
  return str;
};
