import React from "react";
import ListData from "./ListData";
import "./card.css";
const List = () => {
  const data = ListData;
  return (
    <div className="list">
      <h1>Map in react</h1>
      <ul>
        {data.map(({ id, title, description, status }) => (
          <li key={id}>
            {title}
            <br /> {description} <br />
            {status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
