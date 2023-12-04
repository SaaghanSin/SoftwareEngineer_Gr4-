import React, { useState, useEffect } from "react";
import PaymentTable from "./paymentTable";
import "./paymentWin.css";
import anh from "../../assets/images/anh.png";
import PaymentMethod from "./paymentMethod";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PayPalPayment from "../../server/paypal/PayPalPayment";
import NumField3 from "../numField/NumField3";
import Button_login from "../button/button_login/button_login";
import { IoCloseCircle } from "react-icons/io5";
const PaymentWin = ({ handleClose }) => {
  const initialOptions = {
    clientId:
      "AadKCtfIqGR6Wap4xFLmNCuj4TDERrktSY-4MIJdR5y8tq-mpppe4A8svIMRgfd8tqOpblaQz1OOECZE",
    currency: "USD",
    intent: "capture",
  };

  const [quantity, setQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  useEffect(() => {
    // Tính toán tổng tiền khi quantity thay đổi
    const newTotalAmount = quantity * 500;
    setTotalAmount(newTotalAmount);
  }, [quantity]);

  return (
    <div className="payment-win-container">
      <div className="payment-win-content">
        <div className="price-table">
          <PaymentTable />
        </div>
        <div className="bentayphai1">
          <div className="payment-methoed">
            <div className="title_pttt">Phương thức thanh toán</div>
            {/* <PaymentMethod
            label="Button 1"
            onClick={() => console.log("Button 1 clicked")}
          />
          <PaymentMethod
            label="Button 2"
            onClick={() => console.log("Button 2 clicked")}
          /> */}
            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons
              // style={{ layout: "horizontal" }}
              // createOrder={(data, actions) => {
              //   return actions.order.create({
              //     purchase_units: [
              //       {
              //         amount: {
              //           value: totalAmount.toFixed(2),
              //         },
              //       },
              //     ],
              //   });
              // }}
              />
            </PayPalScriptProvider>
          </div>
          <div className="chi_tiet_gd">
            <div className="title_ctgd">Chi tiết giao dịch</div>
            <div className="sotrangcanmua">
              <div className="a11111">Số trang cần mua</div>
              <NumField3 value={quantity} onChange={handleQuantityChange} />
            </div>
            <div className="tongtienthanhtoan">
              Tổng tiền: <div className="sotienphaitra123">{totalAmount}đ </div>
            </div>
            <Button_login>Thanh toán</Button_login>
          </div>
        </div>
        <div className="closemyeye">
          <IoCloseCircle
            onClick={handleClose}
            style={{ fontSize: "28px" }}
          ></IoCloseCircle>
        </div>
      </div>
    </div>
  );
};

export default PaymentWin;
