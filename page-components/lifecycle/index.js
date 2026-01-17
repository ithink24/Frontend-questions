import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // ✅ Mounting
  useEffect(() => {
    console.log("Component mounted");

    // ✅ Unmounting
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  // ✅ Updating
  useEffect(() => {
    if (count > 0) {
      console.log("Component updated: count is", count);
    }
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
