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
import { Button } from "@mui/material";
import axios from "axios";
import { useMyContext } from "../../components/contextModify";
import Wallet from "../wallet/Wallet";
let userName = localStorage.getItem("usr");
let pageNum = localStorage.getItem("pnum");
const PaymentWin = ({ handleClose }) => {
  const initialOptions = {
    clientId:
      "AadKCtfIqGR6Wap4xFLmNCuj4TDERrktSY-4MIJdR5y8tq-mpppe4A8svIMRgfd8tqOpblaQz1OOECZE",
    currency: "USD",
    intent: "capture",
  };

  const handleUpdateClick = async () => {
    try {
      const newpageNum = parseInt(quantity, 10) + parseInt(pageNum, 10);
      const updateData = {
        TenDangNhap: userName,
        SoTrangSoHuu: newpageNum,
      };
      const response = await axios.put(
        `http://localhost/spso-service/src/api/UpdatePage.php`,
        updateData
      );

      console.log("Response from the server:", response);
      const responseData = JSON.parse(
        response.data.split("Connected successfully")[1].trim()
      );
      console.log(responseData);
      if (responseData.success) {
        console.log("Page number updated successfully");
        localStorage.setItem("pnum", newpageNum);
      } else {
        console.log(responseData.success);
        console.log("Failed to update page number 3333");
      }
    } catch (error) {
      console.error("Error updating page number:", error.message);
    }
  };

  const [quantity, setQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [walletNumber, setWalletNumber] = useState(pageNum);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  useEffect(() => {
    const newTotalAmount = quantity * 500;
    setTotalAmount(newTotalAmount);
  }, [quantity]);

  const handlePaymentSuccess = () => {
    handleUpdateClick();
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  };

  return (
    <div className="payment-win-container">
      <div className="payment-win-content">
        <div className="price-table">
          <PaymentTable />
        </div>
        <div className="bentayphai1">
          <div className="payment-methoed">
            <div className="title_pttt">Phương thức thanh toán</div>
            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons onClick={handlePaymentSuccess} />
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
            <Button onClick={handlePaymentSuccess}>Thanh toán</Button>
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
