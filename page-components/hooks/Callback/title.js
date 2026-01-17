import React from "react";

function Title() {
  const x = 2;
  const a = (x) => {
    return x + 2;
  };

  return (
    <div>
      <button onClick={() => a(x)}>click</button>
    </div>
  );
}

export default Title;
