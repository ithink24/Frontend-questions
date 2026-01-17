if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
}

[1, 2, 3].forEach(function (item) {
  console.log("Item:", item);
});
