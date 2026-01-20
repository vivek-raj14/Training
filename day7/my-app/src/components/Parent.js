import React from "react";
import Child from "./Child";
const Parent = () => {
  const message = "message from parent.";
  return (
    <div>
      <h1>Parent</h1>
      <Child message={message} />
    </div>
  );
};

export default Parent;
