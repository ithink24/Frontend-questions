function logPrint() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  // 0, 1, 2, 3, 4;

  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
  // 5, 5, 5, 5, 5;

  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
  // 0, 1, 2, 3, 4; --------> 1st method using let instead of var

  for (var i = 0; i < 5; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    })(i);
  }

  // 0, 1, 2, 3, 4; --------> 2nd method using closure

  let x;
  for (x = 0; x < 5; x++) {
    setTimeout(() => {
      console.log(x);
    }, 0);
  }

  // 5 5 5 5 5
}

logPrint();

(async function () {
  console.log(1);
  setTimeout(() => console.log(2), 0);
  await Promise.resolve().then(() => console.log(3));
  setTimeout(() => console.log(4), 0);
  console.log(5);
  await Promise.resolve().then(() => console.log(6));
  Promise.reject().catch(() => console.log(7));
  console.log(8);
})();
//1 3 5 6 8 7 2 4

setTimeout(() => console.log(1), 0);
new Promise((resolve, reject) => setTimeout(() => resolve(2), 0)).then((d) =>
  console.log(d)
);
setTimeout(() => console.log(3), 0);
console.log(4);
// 4 1 2 3

function flattenArray(arr) {
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item)); // recursive call
    } else {
      result.push(item);
    }
  });
  return result;
}

// Example
const nested = [1, [2, [3, 4], 5], [6, 7], 8];
console.log(flattenArray(nested));
// 👉 [1, 2, 3, 4, 5, 6, 7, 8]
