import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((c) => c + 1);
  };
  return (
    <div>
      <h2>Parent</h2>
      <Child increment={increment} />
      {count}
    </div>
  );
};

export default Parent;
