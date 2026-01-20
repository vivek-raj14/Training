import React from "react";

const Child = ({ increment }) => {
  return (
    <div>
      <h2>Child</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
export default Child;
