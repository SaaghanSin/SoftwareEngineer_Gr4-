import React from "react";
import "./paymentWin.css";

const PaymentWin = ({ handleClose }) => {
  return (
    <div className="payment-win-container">
      <div className="payment-win-content">
        <h2>Payment Window</h2>
        {/* Add your payment form or content here */}
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default PaymentWin;
