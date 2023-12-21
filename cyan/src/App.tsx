import { useState } from "react";
import rainbow from "./assets/rainbow.svg";
import unicorn from "./assets/unicorn.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="cyan">
      <div>
        <img src={rainbow} className="logo" alt="Rainbow" />

        <img src={unicorn} className="logo" alt="Unicorn" />
      </div>
      <h1>Cyan</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </section>
  );
}

export default App;
