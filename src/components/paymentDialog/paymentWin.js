import React from "react";
import PaymentTable from "./paymentTable";
import "./paymentWin.css";
import anh from "../../assets/images/anh.png";
import PaymentMethod from "./paymentMethod";
const PaymentWin = ({ handleClose }) => {
  return (
    <div className="payment-win-container">
      <div className="payment-win-content">
        <div className="price-table">
          <PaymentTable />
        </div>
        <div className="payment-methoed">
          <PaymentMethod
            label="Button 1"
            onClick={() => console.log("Button 1 clicked")}
          />
          <PaymentMethod
            label="Button 2"
            onClick={() => console.log("Button 2 clicked")}
          />
          <PaymentMethod
            label="Button 3"
            imageSrc={anh} // Replace with your image path
            onClick={() => console.log("Button 3 clicked")}
          />
        </div>
        <button onClick={handleClose}>Đóng</button>
      </div>
    </div>
  );
};

export default PaymentWin;
