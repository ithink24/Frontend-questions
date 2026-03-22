import { useEffect } from "react";
import { useState } from "react";

const LIGHTS = {
  green: { color: "green", duration: 3000, next: "yellow" },
  yellow: { color: "yellow", duration: 1000, next: "red" },
  red: { color: "red", duration: 4000, next: "green" },
};

export default function TrafficLights() {
  const [current, setCurrent] = useState("green");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(LIGHTS[current].next);
    }, LIGHTS[current].duration);

    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2>Traffic Light</h2>
        <div
          style={{
            width: 100,
            height: 100,
            margin: "20px auto",
            borderRadius: "50%",
            backgroundColor: LIGHTS[current].color,
          }}
        />
        <p>{current.toUpperCase()}</p>
      </div>
    </div>
  );
}
