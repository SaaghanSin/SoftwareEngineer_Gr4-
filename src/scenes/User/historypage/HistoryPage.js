import { useState } from "react";
import UserSideBar from "../../../components/sideBar/userSideBar";
import EnhancedTable from "../../../components/table/table";
import "./HistoryPage.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import "../../../components/option_info/option2.css";
import Clock from "../../../components/clock/clock";
import axios from "axios";
import Button_login from "../../../components/button/button_login/button_login";
import { useMyContext } from "../../../components/contextModify";
import { useEffect } from "react";
let userName = localStorage.getItem("usr");
const HistoryPage = () => {
  const { pageNum, setPageNumber } = useMyContext();
  const [walletNumber, setWalletNumber] = useState(pageNum);
  const [Stat, setStat] = useState("Hiện");
  const [tableData, setTableData] = useState([
    {
      MaMayIn: "123",
      TenFile: "abc.pdf",
      TrangThai: "Hoàn Thành",
      NgayIn: "2023/12/12",
      SoTrangTrongFile: "5",
      SoBanIn: "1",
    },
    {
      MaMayIn: "123",
      TenFile: "abc.pdf",
      TrangThai: "Hoàn Thành",
      NgayIn: "2023/12/12",
      SoTrangTrongFile: "10",
      SoBanIn: "1",
    },
  ]);
  const [showTable, setShowTable] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost/spso-service/src/api/GetPHistory.php`,
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

          console.log("My data:", responseData.data);
          setTableData(responseData.data);
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
    MaMayIn,
    TenFile,
    TrangThai,
    NgayIn,
    SoTrangTrongFile,
    SoBanIn
  ) {
    latestId += 1;
    return {
      id: latestId,
      MaMayIn,
      TenFile,
      TrangThai,
      NgayIn,
      SoTrangTrongFile,
      SoBanIn,
    };
  }
  const headCells = [
    {
      id: "MaMayIn",
      numeric: true,
      disablePadding: true,
      label: "Mã Máy In",
    },
    {
      id: "TenFile",
      numeric: false,
      disablePadding: false,
      label: "Tên File",
    },
    {
      id: "TrangThai",
      numeric: false,
      disablePadding: false,
      label: "Trạng thái",
    },
    {
      id: "NgayIn",
      numeric: false,
      disablePadding: false,
      label: "Ngày In",
    },
    {
      id: "SoTrangTrongFile",
      numeric: true,
      disablePadding: false,
      label: "Số trang in",
    },
    {
      id: "SoBanIn",
      numeric: true,
      disablePadding: false,
      label: "Số bản in",
    },
  ];

  let abc = tableData;
  let rowsJr = Array.isArray(abc)
    ? abc.map((item) => {
        return createData(
          item["MaMayIn"],
          item["TenFile"],
          item["TrangThai"],
          item["NgayIn"],
          item["SoTrangTrongFile"],
          item["SoBanIn"]
        );
      })
    : [];
  const handleShowTable = () => {
    if (!showTable) {
      setUpdateTable(true);
      setStat("Đóng");
      console.log("11", rowsJr);
      console.log("22", tableData);
    } else {
      setStat("Hiện");
    }

    setShowTable(!showTable);
  };
  return (
    <div>
      <div className="history-page-container">
        <ProSidebarProvider>
          <UserSideBar walletNumber={walletNumber} />
        </ProSidebarProvider>

        <div className="history-page-content">
          {/* <h1>Sinh viên</h1> */}
          <h2>Dịch vụ sinh viên</h2>
          <Button_login onClick={handleShowTable}>{Stat}</Button_login>
          {showTable && (
            <EnhancedTable
              rows={rowsJr}
              headCells={headCells}
              numColumns={6}
              tableName={"Lịch sử in"}
            />
          )}
        </div>

        <div className="bodyoption2">
          {/* <button className="HCMUT" onClick={handleClick}>
        HCMUT
      </button> */}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
