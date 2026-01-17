// Function Statement aka Function Declaration
function a() {
  console.log("a");
}
a();

// Function Expression
var b = function () {
  console.log("b"); //diff is only hoisting from statement
};
b();

// Anonymous Function - it is used as are values just like b
// function () {}

// Named Function Expression
var c = function xyz() {
  console.log("b"); //diff is only hoisting from statement
};
c();
// xyz(); // ReferenceError: xyz is not defined bcs it is not defined in global scope

// First Class Function or Firsr class citizies - Ability to be used  like values
var d = function (param1) {
  return function xyz() {};
};

d();
console.log(d());

// Callback Function - passed as an argument to another function
function m(n) {}

m(function n() {});
