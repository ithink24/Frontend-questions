const arr = [1, 1, 2, 3, 3, 4, 5, 5, 5, 5];

function findDuplicate(arr) {
  const uniqueArray = [];
  const duplicateArray = [];

  arr.forEach((item) => {
    if (uniqueArray.includes(item) && !duplicateArray.includes(item)) {
      duplicateArray.push(item);
    } else {
      uniqueArray.push(item);
    }
  });

  return duplicateArray;
}

console.log(findDuplicate(arr));

function removeDuplicate(arr) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }

  return res;
}

console.log(removeDuplicate(arr));
