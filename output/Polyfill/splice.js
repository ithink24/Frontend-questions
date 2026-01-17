if (!Array.prototype.splice) {
  Array.prototype.splice = function (start, deleteCount, ...itemsToAdd) {
    let removed = [];

    // Normalize start index
    start = start < 0 ? this.length + start : start;

    // Remove items
    for (let i = 0; i < deleteCount; i++) {
      removed.push(this[start + i]);
    }

    // Build the result array
    const leftPart = this.slice(0, start);
    const rightPart = this.slice(start + deleteCount);

    // Rebuild array with inserted items
    const newArray = [...leftPart, ...itemsToAdd, ...rightPart];

    // Update original array
    this.length = 0;
    for (let i = 0; i < newArray.length; i++) {
      this.push(newArray[i]);
    }

    return removed;
  };
}

let arr = [1, 2, 3, 4, 5];

const removed = arr.splice(1, 2);

console.log(arr); // [1, 4, 5]
console.log(removed); // [2, 3]
