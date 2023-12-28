import { useState, Suspense } from "react";
import rainbow from "./assets/rainbow.svg";
import unicorn from "./assets/unicorn.svg";
import "./App.scss";

import SaturnApp from "remoteApp/SaturnApp";
//const SaturnApp = React.lazy(() => import("remoteApp/SaturnApp"));

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <section className="cyan">
        <div>
          <img src={rainbow} className="logo" alt="Rainbow" />
          <img src={unicorn} className="logo" alt="Unicorn" />
        </div>
        <h1>cyan</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <SaturnApp />
        </section>
      </Suspense>
    </main>
  );
};

export default App;
