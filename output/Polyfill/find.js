if (!Array.prototype.find) {
  Array.prototype.find = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) return this[i];
    }
    return undefined;
  };
}

console.log([10, 20, 30].find((n) => n > 15)); // 20
