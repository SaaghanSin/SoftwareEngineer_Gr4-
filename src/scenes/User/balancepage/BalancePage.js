import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import UserSideBar from "../../../components/sideBar/userSideBar";
import EnhancedTable from "../../../components/table/table";
import PaymentWin from "../../../components/paymentDialog/paymentWin";
import MyButton from "../../../components/button/Button";
import "./BalancePage.css";
import TextField from "../../../components/textField/textField";
import { ProSidebarProvider } from "react-pro-sidebar";
import "../../../components/option_info/option3.css";
const BalancePage = () => {
  function createData(ID, date, paymentAmount, numberOfPage, paymentMethod) {
    return {
      ID,
      date,
      paymentAmount,
      numberOfPage,
      paymentMethod,
    };
  }
  const headCells = [
    {
      id: "ID",
      numeric: false,
      disablePadding: true,
      label: " Payment ID",
    },
    {
      id: "date",
      numeric: false,
      disablePadding: false,
      label: "Date",
    },
    {
      id: "paymentAmount",
      numeric: true,
      disablePadding: false,
      label: "Payment Amount",
    },
    {
      id: "numberOfPage",
      numeric: true,
      disablePadding: false,
      label: "Number of Page",
    },
    {
      id: "paymentMethod",
      numeric: false,
      disablePadding: false,
      label: "Payment Method",
    },
  ];
  const rows = [
    createData(1, "2023-11-07", 100, 5, "Credit Card"),
    createData(2, "2023-11-06", 50, 3, "PayPal"),
    // Add more rows as needed
  ];
  const [showTable, setShowTable] = useState(false);
  const handleShowTable = () => {
    setShowTable(!showTable); // Toggle the value of showTable
  };
  const [showPaymentWin, setShowPaymentWin] = useState(false);

  const handleShowPaymentWin = () => {
    setShowPaymentWin(true);
  };

  const handleClosePaymentWin = () => {
    setShowPaymentWin(false);
  };
  return (
    <div className="balance-page-container">
      <ProSidebarProvider>
        <UserSideBar />
      </ProSidebarProvider>
      <div className="balance-page-content">
        {/* <h1>Sinh viên</h1> */}
        <h2>Dịch vụ sinh viên</h2>
        <div className="balance-function">
          <MyButton onClick={handleShowPaymentWin}>Mua thêm trang</MyButton>
          <MyButton onClick={handleShowTable}>Xem lịch sử giao dịch</MyButton>
        </div>
        <TextField description="Số dư trang" value={10} />
        {showTable && ( // Render the EnhancedTable only if showTable is true
          <EnhancedTable
            rows={rows}
            headCells={headCells}
            numColumns={5}
            tableName={"Lịch sử giao dịch "}
          />
        )}
      </div>
      {showPaymentWin && <PaymentWin handleClose={handleClosePaymentWin} />}
      <div className="bodyoption3">
        {/* <button className="HCMUT" onClick={handleClick}>
        HCMUT
      </button> */}
      </div>
      <div className="footer-main">
        {/* <button className="HCMUT" onClick={handleClick}>
        HCMUT
      </button> */}
      </div>
    </div>
  );
};

export default BalancePage;
