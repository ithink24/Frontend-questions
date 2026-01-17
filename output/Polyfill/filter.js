if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

const numbers = [1, 2, 3, 4];
const filtered = numbers.filter((n) => n > 2);
console.log(filtered); // [3, 4]
