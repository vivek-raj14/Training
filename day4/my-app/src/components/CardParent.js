import React from "react";
import CardData from "./CardData";
import ChildCard from "./CardChild";
const CardParent = () => {
  const handleClick = () => {
    console.log("button Clicked");
  };
  const Data = CardData;
  return (
    <div className="list">
      <h1>CardParent</h1>
      <div className="card">
        {Data.map((items) => (
          <ChildCard
            key={items.id}
            {...items}
            onCardClick={() => handleClick()}
          />
        ))}
      </div>
    </div>
  );
};

export default CardParent;
