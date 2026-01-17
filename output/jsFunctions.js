//Slice Example
const fruits = ["apple", "banana", "cherry", "date", "fig", "fig"];
const sliced = fruits.slice(1, 4); // from index 1 to 3 (4 is excluded)

console.log(sliced); // ["banana", "cherry", "date"]
console.log(fruits); // Original array is unchanged

const text = "Hello, World!";
const part = text.slice(7, 12); // index 7 to 11

console.log(part); // "World"
console.log(text); // Original string is unchanged

//Reduce Example
// Using reduce to sum an array of numbers
const numbers = [10, 20, 30];

const total = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(total); // 60

//Some example
// Using some to check if any number in the array is even
const nums = [1, 3, 5, 7, 8];

const hasEven = nums.some((n) => n % 2 === 0);
console.log(hasEven); // true
