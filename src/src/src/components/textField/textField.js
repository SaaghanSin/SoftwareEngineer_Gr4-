// TextField.js
import React from "react";
import "./textfield.css";

const TextField = ({ description, value, onChange }) => {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className="textbox-container">
      <div className="description">{description}</div>
      <input
        type="text"
        className="textbox"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextField;
