import React from "react";
import LevelFour from "./LevelFour";
const LevelThree = ({ prop1, prop2 }) => {
  const prop3 = "prop from level three";
  return (
    <div>
      <h1>Level Three</h1>
      <LevelFour prop={{ prop1, prop2, prop3 }} />
    </div>
  );
};
export default LevelThree;
