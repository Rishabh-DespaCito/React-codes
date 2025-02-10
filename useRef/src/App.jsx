import { useRef, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  useEffect(() => {
    console.log("Component Re-rendered!");
  });

  const incrementStateCount = () => {
    setStateCount(stateCount + 1);
  };

  const incrementRefCount = () => {
    refCount.current += 1;
    console.log(`refCount: ${refCount.current}`);
  };

  return (
    <div>
      <h1>hello</h1>
      CountState: {stateCount}
      <button onClick={incrementStateCount}>Increment State Count</button>
      RefCount: {refCount.current}
      <button onClick={incrementRefCount}>Increment Ref Count</button>
    </div>
  );
}

export default App;
