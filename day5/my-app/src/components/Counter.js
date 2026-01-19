import React, { useState } from "react";
import "./index.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setCount(count - 1)}>-</button>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
