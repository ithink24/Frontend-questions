function x() {
  var a = 10;

  function y() {
    console.log(a);
  }
  y();
}

x(); //10

function a() {
  var x = 20;

  function b() {
    console.log(x); //x is reference to variable
  }

  x = 100;
  return b;
}

const c = a();
c(); //100  function along with its lexical scope forms a

function d() {
  var p = 200;
  function a() {
    var x = 20;

    function b() {
      console.log(x, p);
    }

    x = 100;
    b();
  }

  a();
}

d(); //100, 200

function xy() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

xy(); // 6 6 6 6 6 after timeout or using let instead of var we can get 1 2 3 4 5

function xyz() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }

    close(i);
  }
}

xyz(); // 1 2 3 4 5  after timeout using closure

function outest() {
  var c = 40;
  function outer(b) {
    function inner() {
      console.log(a, b, c); //b is also a part of inner enviroment
    }

    let a = 50; //still form a closure whether its var or let or const
    return inner;
  }

  return outer;
}

var result = outest()("hello");
result();

//Data hiding example
var count = 0;

function increment() {
  count++;
}
// so anyone can access this count and change it we want to hide using closure

function counter() {
  var count = 0;

  return function increment() {
    count++;
    console.log(count, "count");
  };
}
var counter1 = counter();
counter1();
counter1();
