import React, { useState } from "react";

import "./Increment.css";

const Increment = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  let decrement = () => {
    setCounter(counter - 1);
  };

  if (counter <= 0) {
    decrement = () => {
      setCounter(0);
    };
  }

  return (
    <div className="container">
      <h1>Increment and Decrement</h1>

      <button onClick={decrement} className="bar">
        -
      </button>
      <div className="counter">{counter}</div>
      <button onClick={increment} className="bar">
        +
      </button>
    </div>
  );
};

export default Increment;
