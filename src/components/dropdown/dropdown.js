import React from "react";
import "./dropdown_print.css";
const DropdownPrint = ({ data, selectedOption, onDropdownChange }) => {
  return (
    <select
      className="custom-dropdown"
      value={selectedOption}
      onChange={(e) => onDropdownChange(e.target.value)}
    >
      <option value="" className="item_in_dropdown">
        Select an option
      </option>
      {data.map((option) => (
        <option
          className="item_in_dropdown"
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownPrint;
