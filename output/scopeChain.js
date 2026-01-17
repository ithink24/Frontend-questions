var b = 20;

function a() {
  var b = 10;

  function c() {
    console.log(b);
  }
  c();
}

a(); //10
console.log(b); //20
