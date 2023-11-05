import React, { useState } from "react";

const OptionField = ({ description, options, selectedOptionIndex, value }) => {
  const [selectedOptionIndexLocal, setSelectedOptionIndexLocal] = useState(
    selectedOptionIndex
  );
  const [valueLocal, setValueLocal] = useState(value);

  const handleOptionChange = (index) => {
    setSelectedOptionIndexLocal(index);
    setValueLocal(options[index]);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
        <div>{description}</div>
      </div>
      {options.map((option, index) => (
        <div
          key={index}
          style={{ marginLeft: "20px", display: "flex", alignItems: "center" }}
        >
          <input
            type="checkbox"
            disabled
            checked={index === selectedOptionIndexLocal}
            onChange={() => handleOptionChange(index)}
            style={{ marginRight: "5px" }}
          />
          <div>{option}</div>
        </div>
      ))}
      <div style={{ width: "100px", marginLeft: "20px" }}>
        <input
          type="text"
          className="textbox"
          value={valueLocal}
          readOnly
          style={{ width: "100px" }}
        />
      </div>
    </div>
  );
};

export default OptionField;