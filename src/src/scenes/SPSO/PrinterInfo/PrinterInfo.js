import * as React from "react";
import { useState } from "react";
import "./PrinterInfo.css";
import Datepicker from "../../../components/datePicker/DatePicker";
import NumField from "../../../components/numField/NumField";
import SPSOSidebar from "../../../components/sideBar/spsoSideBar";
const PrinterInfo = () => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };
  return (
    <div className="info-page-container">
      <SPSOSidebar />
      <div className="info-page-content">
        <h1>Ban quản lí</h1>
        <h2>Dịch vụ quản lí</h2>
        <Datepicker />
        <NumField value={quantity} onChange={handleQuantityChange} />
      </div>
    </div>
  );
};
export default PrinterInfo;
