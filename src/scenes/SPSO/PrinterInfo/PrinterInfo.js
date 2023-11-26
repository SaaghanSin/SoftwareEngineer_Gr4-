import React, { useState } from "react";
import "./PrinterInfo.css";
import Datepicker from "../../../components/datePicker/DatePicker";
import NumField from "../../../components/numField/NumField";
import SPSOSidebar from "../../../components/sideBar/spsoSideBar";
import { selectedTypesData, saveSelectedTypes } from "../../../data/type";

const PrinterInfo = () => {
  const [quantity, setQuantity] = useState(0);
  const [selectedTypes, setSelectedTypes] = useState(
    selectedTypesData.selectedTypes
  );

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleTypeToggle = (type) => {
    const updatedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];

    setSelectedTypes(updatedTypes);
  };

  const handleSave = () => {
    // Save the selected types to local storage
    saveSelectedTypes(selectedTypes);
    console.log("Selected Types:", selectedTypes);
  };

  return (
    <div className="info-page-container">
      <SPSOSidebar />
      <div className="info-page-content">
        <h1>Ban quản lí</h1>
        <h2>Dịch vụ quản lí</h2>
        <Datepicker />
        <NumField value={quantity} onChange={handleQuantityChange} />
        <div className="type-permitted">
          <h3>Types Permitted:</h3>
          {[1, 2, 3, 4, 5].map((type) => (
            <div key={type} className="checkbox-item">
              <input
                type="checkbox"
                id={`type-${type}`}
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeToggle(type)}
              />
              <label htmlFor={`type-${type}`}>{getTypeName(type)}</label>
            </div>
          ))}
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

// Moved getTypeName function outside of PrinterInfo function
function getTypeName(type) {
  switch (type) {
    case 1:
      return "DOC";
    case 2:
      return "PDF";
    case 3:
      return "TXT";
    case 4:
      return "PPTX";
    case 5:
      return "XLSX";
    default:
      return "";
  }
}

export default PrinterInfo;
