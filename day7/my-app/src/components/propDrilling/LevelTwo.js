import React from "react";
import LevelThree from "./LevelThree";
const LevelTwo = ({ prop1 }) => {
  const prop2 = "Prop from Level Two";
  return (
    <div>
      <h1>Level Two</h1>
      <LevelThree prop1={prop1} prop2={prop2} />
    </div>
  );
};
export default LevelTwo;
