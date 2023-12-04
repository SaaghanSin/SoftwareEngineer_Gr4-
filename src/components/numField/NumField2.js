import React from "react";
// import "./NumField.css";
import "./NumField2.css";
import { useMyContext } from "../contextModify";
const NumField2 = ({ value, onChange }) => {
  const { staticModify } = useMyContext();
  return (
    <div>
      {/* <label htmlFor="numfield">Số trang mặc định </label> */}
      <input
        className="mynumfile2"
        type="number1"
        id="numfield1"
        value={value}
        onChange={(e) => {
          const inputValue = parseInt(e.target.value, 10) || 0;
          const newValue = inputValue >= 0 ? inputValue : 0;
          onChange(newValue);
          // Disable the input if staticModify is true
        }}
      />
    </div>
  );
};

export default NumField2;
