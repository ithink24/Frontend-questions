import { useState, useCallback } from "react";
import CustomButton from "./Button";
import Count from "./Count";
import Title from "./title";

function CallBack() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 5000);
  }, [salary]);

  //   const incrementAge = () => {
  //     console.log("increase age");
  //     setAge(age + 1);
  //   };

  //   const incrementSalary = () => {
  //     console.log("increase salary");
  //     setSalary(salary + 5000);
  //   };
  return (
    <>
      <div>
        <Title />
        <Count text="age" count={age} />
        <CustomButton handleClick={incrementAge}>
          <div>Age</div>
        </CustomButton>
        <Count text="salary" count={salary} />
        <CustomButton handleClick={incrementSalary}>Salary</CustomButton>
      </div>
    </>
  );
}

export default CallBack;
