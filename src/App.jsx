import { useState } from "react";
import "./App.css";

const COLORS = ["black", "grey", "orange", "yellow"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={() => onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;
