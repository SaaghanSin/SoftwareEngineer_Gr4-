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
import { useMyContext } from "../../../components/contextModify";
import Button_login from "../../../components/button/button_login/button_login";
import axios from "../../../api/axios";
import { useEffect } from "react";
let userName = localStorage.getItem("usr");
const BalancePage = () => {
  const { pageNum, setPageNumber } = useMyContext();
  const [walletNumber, setWalletNumber] = useState(pageNum);
  const [Stat, setStat] = useState("Hiện");
  const [showTable, setShowTable] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);
  const [tableData, setTableData] = useState([
    {
      NgayMuaGiay: "123",
      GioMuaGiay: "abc.pdf",
      TongSoTienThanhToan: "Hoàn Thành",
      SoTrangMua: "2023/12/12",
      PhuongThucThanhToan: "5",
    },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost/spso-service/src/api/GetHistory.php`,
          { params: { TenDangNhap: userName } }
        );

        console.log("Response from the server:", response);

        if (response.status === 200) {
          // Check if the response data includes "Connected successfully" and remove it
          const responseData = JSON.parse(
            response.data.includes("Connected successfully")
              ? response.data.split("Connected successfully")[1].trim()
              : response.data
          );

          // If responseData is a string, parse it again
          const finalData =
            typeof responseData === "string"
              ? JSON.parse(responseData)
              : responseData;

          console.log("My data:", finalData.data);
          setTableData(finalData.data);
        } else {
          console.log("No data found for the given username");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  let latestId = 0;
  function createData(
    NgayMuaGiay,
    GioMuaGiay,
    TongSoTienThanhToan,
    SoTrangMua,
    PhuongThucThanhToan
  ) {
    latestId += 1;
    return {
      id: latestId,
      NgayMuaGiay,
      GioMuaGiay,
      TongSoTienThanhToan,
      SoTrangMua,
      PhuongThucThanhToan,
    };
  }
  const headCells = [
    {
      id: "NgayMuaGiay",
      numeric: false,
      disablePadding: true,
      label: " Payment ID",
    },
    {
      id: "GioMuaGiay",
      numeric: false,
      disablePadding: false,
      label: "Date",
    },
    {
      id: "TongSoTienThanhToan",
      numeric: true,
      disablePadding: false,
      label: "Payment Amount",
    },
    {
      id: "SoTrangMua",
      numeric: true,
      disablePadding: false,
      label: "Number of Page",
    },
    {
      id: "PhuongThucThanhToan",
      numeric: false,
      disablePadding: false,
      label: "Payment Method",
    },
  ];
  let abc = tableData;
  let rowsJr = Array.isArray(abc)
    ? abc.map((item) => {
        return createData(
          item["NgayMuaGiay"],
          item["GioMuaGiay"],
          item["TongSoTienThanhToan"],
          item["SoTrangMua"],
          item["PhuongThucThanhToan"]
        );
      })
    : [];
  const handleShowTable = () => {
    if (!showTable) {
      setUpdateTable(true);
      console.log("11", rowsJr);
      console.log("22", tableData);
    }
    setShowTable(!showTable);
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
        <UserSideBar walletNumber={walletNumber} />
      </ProSidebarProvider>
      <div className="balance-page-content">
        {/* <h1>Sinh viên</h1> */}
        <h2>Dịch vụ sinh viên</h2>
        <div className="balance-function">
          <Button_login onClick={handleShowPaymentWin}>
            Mua thêm trang
          </Button_login>
          <Button_login onClick={handleShowTable}>
            Xem lịch sử giao dịch
          </Button_login>
        </div>
        {showTable && ( // Render the EnhancedTable only if showTable is true
          <EnhancedTable
            rows={rowsJr}
            headCells={headCells}
            numColumns={5}
            tableName={"Lịch sử giao dịch "}
          />
        )}
      </div>
      {showPaymentWin && <PaymentWin handleClose={handleClosePaymentWin} />}
      <div className="bodyoption3"></div>
      <div className="footer-main">
        {/* <button className="HCMUT" onClick={handleClick}>
        HCMUT
      </button> */}
      </div>
    </div>
  );
};

export default BalancePage;
