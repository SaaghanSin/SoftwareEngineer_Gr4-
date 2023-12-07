import React from "react";
import "./NumField.css";
import { useMyContext } from "../contextModify";
const NumField = ({ value, onChange }) => {
  const { staticModify } = useMyContext();
  return (
    <div>
      <label htmlFor="numfield">Số trang mặc định </label>
      <input
        type="number"
        id="numfield"
        value={value}
        onChange={(e) => {
          const inputValue = parseInt(e.target.value, 10) || 0;
          const newValue = inputValue >= 0 ? inputValue : 0;
          onChange(newValue);
          // Disable the input if staticModify is true
        }}
        disabled={!staticModify}
      />
    </div>
  );
};

export default NumField;
