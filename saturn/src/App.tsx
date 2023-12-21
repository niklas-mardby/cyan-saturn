import { useState } from "react";
import saturn from "./assets/saturn.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={saturn} className="logo" alt="Saturn" />
      </div>
      <h1>saturn</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
