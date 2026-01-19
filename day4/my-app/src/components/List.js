import React from "react";
import ListData from "./ListData";

const List = () => {
  const data = ListData;
  return (
    <>
      <h1>Map in react</h1>
      {data.map(({ id, title, description, status }) => (
        <ul key={id}>
          <li>
            {title}
            <br /> {description} <br />
            {status}
          </li>
        </ul>
      ))}
    </>
  );
};

export default List;
