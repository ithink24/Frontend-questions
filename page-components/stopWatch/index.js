import React, { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  //   useEffect(() => {
  //     let invervalId;
  //     if (isRunning) {
  //       invervalId = setInterval(() => setTime(time + 1), 1000);
  //     }

  //     return () => clearInterval(invervalId);
  //   }, [time, isRunning]);

  const handleStart = () => {
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
  };

  return (
    <div>
      <h2>Time: {time}s</h2>
      {/* <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button> */}

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default StopWatch;
