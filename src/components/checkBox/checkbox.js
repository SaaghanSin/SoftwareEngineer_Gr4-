import React from "react";

const CheckboxWithDescription = ({ description, isChecked, onChange }) => {
  const handleCheckboxChange = () => {
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
      <div style={{ width: "80px", flexShrink: 0, marginRight: "20px" }}>
        {description}
      </div>
      <label style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={isChecked}
            style={{ marginRight: "10px" }}
            onChange={handleCheckboxChange}
          />
        </div>
      </label>
    </div>
  );
};

export default CheckboxWithDescription;
