import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);
  const addCounter = () => {
    setCounters([...counters, { id: counters.length + 1, value: 0 }]);
  };

  const incrementCounter = (id) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter
      )
    );
  };

  return (
    <div className="app-container">
      <h1>Hello</h1>
      <button onClick={addCounter}>Add Counter</button>
      <ul>
        {counters.map((counter) => (
          <li key={counter.id}>
            <h2>
              Counter {counter.id} : {counter.value}
            </h2>
            <button
              onClick={() => {
                incrementCounter(counter.id);
              }}
            >
              Increment
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
