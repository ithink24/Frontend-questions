console.log(this); // window object

function x() {
  console.log(this); // window object in non strict mode
  // undefined in strict mode
}

x();

// window.x(); // window object in any mode

const student = {
  name: "ankit",
  printName: function () {
    console.log(this.name);
  },
};

student.printName(); //ankit

const student2 = {
  name: "test",
};

//i want to update student name by student2 (will use Call method)
student.printName.call(student2); //value of this = student2

var obj = {
  name: "ankit",
  z: () => {
    console.log(this); //global object bcs obj in global space (enclosing lexical context)
  },
};

obj.z();

var obj2 = {
  a: 20,
  x: function () {
    const y = () => {
      console.log(this); //it retains the this value of enclosing lexical context
    };
    y();
  },
};

obj2.x();
