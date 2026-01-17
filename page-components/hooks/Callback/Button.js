import React from "react";

function CustomButton({ handleClick = () => {}, children }) {
  console.log(children, "renderrr");
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}

export default React.memo(CustomButton);
