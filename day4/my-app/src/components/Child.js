import React from "react";

const Child = ({ text = "welcome", onUpdate }) => {
  return (
    <>
      <h1>Child</h1>
      <p>{text}</p>
      <button onClick={onUpdate}>Change through Child</button>
    </>
  );
};

export default Child;
