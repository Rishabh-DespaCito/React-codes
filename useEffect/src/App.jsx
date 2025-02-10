import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [anotherValue, setAnotherValue] = useState(10);

  useEffect(() => {
    console.log(`useEffect Triggered`);
  }, [count]);

  return (
    <div>
      <h1> UseEffect Hook </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setAnotherValue(anotherValue + 1)}>
        Another Value
      </button>
    </div>
  );
}

export default App;
