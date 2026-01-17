const arr = [1, 4, 2, -2, -9, 10, 2, 12, 2, -4, -4, -4, -4, 2, 6, 7];
let peak = arr[0];
let index = 0;
let res = [];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] * arr[i - 1] > 0) {
    if (peak < 0 && arr[i] < peak) {
      peak = arr[i];
      index = i;
    }
    if (peak >= 0 && arr[i] > peak) {
      peak = arr[i];
      index = i;
    }
  } else {
    res.push({ index, peak });
    index = i;
    peak = arr[i];
  }
}

console.log(res, "result");

function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      // recursive call if it's an array
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
