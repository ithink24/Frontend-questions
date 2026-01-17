import React, { useState, useMemo } from "react";

function Usememo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  //   const isEven = () => {
  //     console.log("aaa");
  //     return counterOne % 2 === 0;
  //   };

  const isEven = useMemo(() => {
    console.log("aaa"); //when we use usememo this is not render on counterTwo
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count one</button>
        {counterOne} {isEven ? "Even" : "Odd"}
      </div>

      <div>
        <button onClick={incrementwo}>Count two</button>
        {counterTwo}
      </div>
    </div>
  );
}

export default Usememo;
