if (!Array.prototype.some) {
  Array.prototype.some = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) return true;
    }
    return false;
  };
}

console.log([1, 2, 3].some((n) => n > 2)); // true
