import React, { useRef } from "react";

const Focus = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Focus</h1>
      <div>
        <input ref={inputRef} type="text" placeholder="type here" />
        <button onClick={handleClick}>Focus</button>
      </div>
    </div>
  );
};

export default Focus;
