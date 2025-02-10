import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const focusInput = () => {
    // console.log(inputRef.current);
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  };
  return (
    <div>
      <h1>Learn React</h1>
      <input ref={inputRef} type="text" placeholder="Focus me"></input>
      <button onClick={focusInput}>Focus and Higlight</button>
    </div>
  );
}

export default App;
