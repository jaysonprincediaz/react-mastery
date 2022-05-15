import "./InputChange.css";

import React, { useState } from "react";

const InputChange = () => {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div className="input-container">
      <h1>Input Change</h1>
      <input onChange={inputHandler} placeholder="write something..." />
      {inputValue}
    </div>
  );
};

export default InputChange;
