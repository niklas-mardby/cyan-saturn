import { useState } from "react";
import Saturn from "./assets/saturn.svg?react";
import "./App.scss";

const SaturnApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="saturn">
      <div>
        <Saturn className="logo" />
      </div>
      <h1>saturn</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
};

export default SaturnApp;
