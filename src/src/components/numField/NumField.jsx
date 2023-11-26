import React, { useState } from 'react';
import "./NumField.css";
const NumField = ({ value, onChange }) => {


  return (
      <div>
          <label htmlFor="numfield">Số trang mặc định </label>
      <input
              type="number"
              id="numfield"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10) || 0)}
      />
    </div>
  );
};

export default NumField;
