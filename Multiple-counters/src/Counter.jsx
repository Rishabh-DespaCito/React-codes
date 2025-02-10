import { useState } from "react";

function Counter({ id }) {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>
        Counter {id} : {count}
      </h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
