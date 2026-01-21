import React from "react";
import ListData from "./ListData";

const List2 = () => {
  const data = ListData;
  return (
    <div className="list">
      <h1>Conditional rendering</h1>
      <ul>
        {/* Conditional rendering */}
        {data.map(({ id, title, description, status }) => (
          <li key={id}>
            {status === "Completed"
              ? `${status}==>Discription:: ${description}`
              : `${status}==>Title::  ${title}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List2;
