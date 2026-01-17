if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
}

const doubled = [1, 2, 3].map(function (item) {
  return item * 2;
});

console.log(doubled);
