import React, { useReducer } from "react";

const initialState = { count: 0 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "RESET":
      return { count: 0 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h1>Counter :{state.count}</h1>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch({ type: "RESET" });
          }}
        >
          RESET
        </button>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default Counter;
