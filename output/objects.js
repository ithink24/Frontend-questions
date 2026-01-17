// const a = {};
// const b = {};

// console.log(a == b);

// let a = { name: "Ok" };
// let b = { name: "Ok" };

// console.log(a === b);

// let a = { name: "Ok" };
// let b = { ...a };

// console.log(a == b);
// console.log(a.name == b.name);

// let a = { person: { name: "Ok" } };
// let b = { person: { name: "Ok" } };

// console.log(a.person == b.person);
// console.log(a.person === b.person);

// let a = { person: { name: "Ok" } };
// let b = { ...a };

// console.log(a == b);
// console.log(a.person == b.person);
// console.log(a.person === b.person);
// console.log(a.person.name == b.person.name);

// let a = { person: { name: "Ok" } };
// let b = JSON.parse(JSON.stringify(a));

// console.log(a, b);
// console.log(a == b);
// console.log(a.person == b.person);
// console.log(a.person === b.person);
// console.log(a.person.name == b.person.name);

// var a = 5;
// var b = a;

// b++;
// console.log(a, b);

// let obj1 = { name: "Jerry created it" };
// let obj2 = obj1;

// obj2.name = "Tom created it";
// console.log(obj1, obj2);
// console.log(obj1 === obj2);

// console.log(1);

// setTimeout(() => console.log(2), 1000);
// setTimeout(() => console.log(3), 0);
// Promise.resolve(5).then((val) => console.log(val));

// console.log(4);

// let temp = "outer value";
// if (true) {
//   console.log(temp);
//   let temp = "inner value";
//   console.log(temp);
// }
// console.log(temp);

// (() => {
//   let x = (y = 10);
// })();

// console.log(typeof x);
// console.log(typeof y);

const a = { b: 10 };

Object.prototype.c = 20; // adds an inherited property to all objects.
for (key in a) {
  console.log(key);
}

const user = {
  name: "John",
  eat() {
    console.log(this);
    var eatFruit = function () {
      console.log(this);
    };
    eatFruit();
  },
};

user.eat();

// function delay() {
//   return new Promise((resolve) => setTimeout(resolve, 2000));
// }

// async function delayedLog(item) {
//   console.log(item);
//   await delay();
//   console.log(item);
// }

// async function processArray(array) {
//   array.forEach(async (item) => {
//     await delayedLog(item);
//   });
// }

// processArray([1, 2, 3, 4]);

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function process(array) {
  array.forEach(async (item) => {
    await delayedLog(item);
  });
  console.log("Process completed!");
}
process([1, 2, 3, 5]);
