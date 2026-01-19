import React from "react";
import ListData from "./ListData";

const List2 = () => {
  const data = ListData;
  return (
    <>
      <h1>Conditional rendering</h1>
      {data.map(({ id, title, description, status }) => (
        <ul key={id}>
          <li>
            {status === "Completed"
              ? `${status} : ${description}`
              : `${status} : ${title}`}
          </li>
        </ul>
      ))}
    </>
  );
};

export default List2;
