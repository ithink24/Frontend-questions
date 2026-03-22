import { useState } from "react";

export default function App() {
  const n = 9;
  const color = ["red", "yellow", "blue", "green"];
  const [choosenColor, setChoosenColor] = useState("");

  let colorObj = {};

  let j = 0;
  for (let i = n * n - 1; i > n * n - n - 1; i--) {
    colorObj[i] = color[j % color.length];
    j++;
  }

  const [colors, setColors] = useState(colorObj);

  const handleColor = (index) => {
    if (Object.keys(colorObj).includes(index.toString())) {
      console.log("ppp");
      setChoosenColor(colorObj[index]);
    } else {
      setColors({ ...colors, [index]: choosenColor });
    }
  };

  return (
    <div className="App">
      <h1>Color pallete</h1>
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${n}, 50px)`,
          gridTemplateRows: `repeat(${n}, 50px)`,
          gap: "4px",
        }}
      >
        {Array.from({ length: n * n }).map((_, index) => (
          <div
            key={index}
            className="box"
            style={{
              backgroundColor: colors[index],
              border: '1px solid #000'
            }}
            onClick={() => handleColor(index)}
          >
            {index}
          </div>
        ))}
      </div>
    </div>
  );
}
