if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

const sum = [1, 2, 3, 4].reduce((acc, n) => acc + n, 0);
console.log(sum); // 10
