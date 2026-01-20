import React from "react";

const LevelFour = ({ prop }) => {
  const { prop1, prop2, prop3 } = prop;
  return (
    <div>
      <h1>Level Four</h1>
      <div>
        <p>From Level One={prop1}</p>
        <p>From Level Two={prop2}</p>
        <p>From Level Three={prop3}</p>
      </div>
    </div>
  );
};
export default LevelFour;
