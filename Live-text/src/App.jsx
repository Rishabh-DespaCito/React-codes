import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  return (
    <div>
      <h1>Hello</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <h3>{text}</h3>
    </div>
  );
}

export default App;
