import React from "react";
import LevelTwo from "./LevelTwo";
const LevelOne = () => {
  const prop1 = "Prop from Level One";
  return (
    <div>
      <h1>Level One</h1>
      <LevelTwo prop1={prop1} />
    </div>
  );
};
export default LevelOne;
