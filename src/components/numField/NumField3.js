import React from "react";
// import "./NumField.css";
import "./numField3.css";
import { useMyContext } from "../contextModify";
const NumField3 = ({ value, onChange }) => {
  const { staticModify } = useMyContext();
  return (
    <div>
      {/* <label htmlFor="numfield">Số trang mặc định </label> */}
      <input
        className="mynumfile3"
        type="number2"
        id="numfield2"
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

export default NumField3;
