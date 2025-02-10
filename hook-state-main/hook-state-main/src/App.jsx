import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const incrementValue = () => {
    return setCount(count + step);
  };
  const decrementValue = () => {
    return setCount(count - step);
  };
  const incrementTwice = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="app-container">
      <h1>Hello</h1>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(parseInt(e.target.value))}
      />
      <button onClick={incrementValue}>increment</button>
      <h2>Count : {count}</h2>
      <button onClick={decrementValue}>decrement</button>
      <button onClick={incrementTwice}>+2</button>
    </div>
  );
}

export default App;
