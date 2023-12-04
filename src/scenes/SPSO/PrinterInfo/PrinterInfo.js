import React, { useState, useEffect } from "react";
import "./PrinterInfo.css";
import Datepicker from "../../../components/datePicker/DatePicker";
import NumField from "../../../components/numField/NumField";
import SPSOSidebar from "../../../components/sideBar/spsoSideBar";
import { selectedTypesData, saveSelectedTypes } from "../../../data/type";
import Button_login from "../../../components/button/button_login/button_login";
import { useMyContext } from "../../../components/contextModify";

const PrinterInfo = () => {
  const [quantity, setQuantity] = useState(0);
  const {
    staticModify,
    setFalsestaticModify,
    setTruestaticModify,
    selectedTypescontext,
    setStaticfile,
  } = useMyContext();
  const [originalQuantity, setOriginalQuantity] = useState(0);
  const [selectedTypes, setSelectedTypes] = useState(
    selectedTypesData.selectedTypes
  );
  const [originalSelectedTypes, setOriginalSelectedTypes] = useState([]);

  useEffect(() => {
    if (!staticModify) {
      setOriginalQuantity(quantity);
      setOriginalSelectedTypes([...selectedTypes]);
    }
    console.log("check my var", selectedTypescontext);
  }, [staticModify, quantity, selectedTypes]);

  useEffect(() => {
    // Save to local storage whenever selectedTypes changes
    localStorage.setItem("selectedTypes", JSON.stringify(selectedTypes));
  }, [selectedTypes]);

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
    saveSelectedTypes(selectedTypes);
    setFalsestaticModify();

    console.log("Selected Types:", selectedTypes);
  };

  const handleModify = () => {
    setTruestaticModify();
  };

  const handleCancel = () => {
    setQuantity(originalQuantity);
    setSelectedTypes([...originalSelectedTypes]);
    setFalsestaticModify();
  };

  return (
    <div className="info-page-container">
      <SPSOSidebar />
      <div className="info-page-content">
        <h2 className="header2inprinterinfo">Dịch vụ quản lí</h2>
        <Datepicker />
        <NumField value={quantity} onChange={handleQuantityChange} />
        <div className="type-permitted">
          <h3>Types Permitted:</h3>
          {[1, 2, 3, 4, 5].map((type) => (
            <div key={type} className="checkbox-item">
              <input
                name="a"
                type="checkbox"
                id={`type-${type}`}
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeToggle(type)}
                disabled={!staticModify}
              />
              <label className="mylableinchoose" htmlFor={`type-${type}`}>
                {getTypeName(type)}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="save_and_modify">
        {staticModify && (
          <Button_login className="savebutton" onClick={handleSave}>
            Save
          </Button_login>
        )}
        {!staticModify && (
          <Button_login
            className="modifybutton_printerinfo"
            onClick={handleModify}
          >
            Modify
          </Button_login>
        )}
        {staticModify && (
          <Button_login
            className="cancelbutton_printerinfo"
            onClick={handleCancel}
          >
            Hủy bỏ
          </Button_login>
        )}
      </div>
    </div>
  );
};

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
