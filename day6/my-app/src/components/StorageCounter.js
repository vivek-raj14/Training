import React from "react";
import useLocalStorage from "./useLocalStorage";

const StorageCounter = () => {
  const [data, setData] = useLocalStorage("count", 0);
  return (
    <div>
      <h1>Local Storage Counter(can not reset after re-render): {data}</h1>
      <div>
        <button
          onClick={() => {
            setData(data - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setData(0);
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            setData(data + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default StorageCounter;
