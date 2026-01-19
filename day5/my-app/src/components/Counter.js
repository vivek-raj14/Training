import React, { useState } from "react";
import "./index.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="counter_co">
        <button onClick={() => setCount(count - 1)}>-</button>
        <div className="counter_text">
          <p>{count}</p>
        </div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
