function chain(fns) {
  // this.sum = (x, y) => {
  //   return x + y;
  // };
  // this.double = x => {
  //   return x * 2;
  // };
  // this.minus = (x, y) => {
  //   return x - y;
  // };
  // this.addOne = x => {
  //   return x + 1;
  // };
  this.result = 0;
  this.sum = (x, y = 0) => {
    this.result = this.result + x + y;
  };
  this.double = x => {
    return x * 2;
  };
  this.minus = (x, y) => {
    return x - y;
  };
  this.addOne = x => {
    return x + 1;
  };
}
