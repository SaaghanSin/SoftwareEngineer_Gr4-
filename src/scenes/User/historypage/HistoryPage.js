import UserSideBar from "../../../components/sideBar/userSideBar";
import EnhancedTable from "../../../components/table/table";
import "./HistoryPage.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import "../../../components/option_info/option2.css";
import Clock from "../../../components/clock/clock";
const HistoryPage = () => {
  function createData(
    id,
    IDStudent,
    PrinterID,
    Filename,
    Status,
    Start,
    End,
    Num
  ) {
    return {
      id,
      IDStudent,
      PrinterID,
      Filename,
      Status,
      Start,
      End,
      Num,
    };
  }
  const headCells = [
    {
      id: "IDStudent",
      numeric: true,
      disablePadding: true,
      label: " MSSV",
    },
    {
      id: "PrinterID",
      numeric: true,
      disablePadding: false,
      label: "PrinterID",
    },
    {
      id: "Filename",
      numeric: false,
      disablePadding: false,
      label: "Tên File",
    },
    {
      id: "Status",
      numeric: false,
      disablePadding: false,
      label: "Trạng thái",
    },
    {
      id: "Start",
      numeric: false,
      disablePadding: false,
      label: "Thời gian bắt đầu",
    },
    {
      id: "End",
      numeric: false,
      disablePadding: false,
      label: "Thời gian kết thúc",
    },
    {
      id: "Num",
      numeric: true,
      disablePadding: false,
      label: "Số trang in",
    },
  ];
  const rows = [
    createData(
      1,
      2110992,
      1,
      "abc.pdf",
      "Thất bại",
      "2023-11-07 08:42",
      "2023-11-07 08:43",
      1
    ),
    createData(
      1,
      2110992,
      2,
      "abc.pdf",
      "Thất bại",
      "2023-11-07 08:42",
      "2023-11-07 08:43",
      1
    ),
    createData(
      1,
      2110992,
      3,
      "abc.pdf",
      "In thành công",
      "2023-11-07 08:42",
      "2023-11-07 08:43",
      1
    ),
    createData(
      1,
      2110992,
      4,
      "abc.pdf",
      "In thành công",
      "2023-11-07 08:42",
      "2023-11-07 08:43",
      1
    ),
    createData(
      1,
      2110992,
      5,
      "abc.pdf",
      "In thành công",
      "2023-11-07 08:42",
      "2023-11-07 08:43",
      1
    ),
    createData(
      1,
      2110992,
      6,
      "abc.pdf",
      "In thành công",
      "2023-11-07 08:42",
      "2023-11-07 08:43",
      1
    ),
    createData(
      1,
      2110992,
      7,
      "abc.pdf",
      "In thành công",
      "2023-11-07 08:42",
      "2023-11-07 08:43",
      1
    ),
    createData(
      1,
      2110992,
      8,
      "abc.pdf",
      "In thành công",
      "2023-11-07 08:42",
      "2023-11-07 08:43",
      1
    ),
    createData(
      1,
      2110992,
      9,
      "abc.pdf",
      "Thất bại",
      "2023-11-07 08:42",
      "2023-11-07 08:43",
      1
    ),
    createData(
      1,
      2110992,
      10,
      "abc.pdf",
      "Thất bại",
      "2023-11-07 08:42",
      "2023-11-07 08:43",
      1
    ),
  ];
  const handleClick = () => {
    window.open("https://www.facebook.com/", "_blank");
  };
  return (
    <div>
      <div className="history-page-container">
        <ProSidebarProvider>
          <UserSideBar />
        </ProSidebarProvider>

        <div className="history-page-content">
          {/* <h1>Sinh viên</h1> */}
          <h2>Dịch vụ sinh viên</h2>
          <EnhancedTable
            rows={rows}
            headCells={headCells}
            numColumns={7}
            tableName={"Lịch sử in"}
          />
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
