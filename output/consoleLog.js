const dataAPI = (data) => Promise.resolve(data);

function fetchData1() {
  dataAPI(1).then(res => console.log(res));
  console.log("First");
}

async function fetchData2() {
  console.log(await dataAPI(2));

  console.log("Second");
}

fetchData1();
fetchData2();



console.log(0.1 + 0.2 === 0.3);
console.log("5" + 2);
console.log("5" - 2);


setTimeout(() => console.log(1), 0);
setTimeout(() => console.log(2), 1000);
for(var i =3; i <9;i++) {setTimeout(()=>console.log(i),1000)}
Promise.resolve().then(() => console.log(11));
setTimeout(() => console.log(9), 0);
setTimeout(() => console.log(10), 1000);


var x = 10; 

function xyz() {
    console.log(x);
    var x = 20;
}
