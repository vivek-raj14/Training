import React from "react";
import usersData from "./User";
import Box from "./Box";
import "./box.css";
const Cards = ({ children }) => {
  const data = usersData;
  return (
    <div>
      <h1 className="heading">Users</h1>
      <div className="cards">
        {data.map((data) => (
          <Box key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
