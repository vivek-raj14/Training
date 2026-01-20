import React from "react";
import GrandChild from "./GrandChild";
const Child = ({ message }) => {
  return (
    <div>
      <h1>Child Component</h1>
      <GrandChild message={message} />
    </div>
  );
};

export default Child;
