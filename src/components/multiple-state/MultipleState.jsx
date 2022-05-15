import React, { useState } from "react";

const MultipleUseState = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        Click Here
      </button>
      {showText && <h2>This is a MultipleState</h2>}
    </div>
  );
};

export default MultipleUseState;
