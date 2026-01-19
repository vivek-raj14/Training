import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [title, setTitle] = useState();
  const handleChange = () => {
    setTitle("Changed by Child");
  };

  return (
    <>
      <h1>Parent</h1>
      <Child onUpdate={handleChange} text={title} />
    </>
  );
};
export default Parent;
