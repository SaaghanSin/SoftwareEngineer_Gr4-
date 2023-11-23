import UserSideBar from "../../../components/sideBar/userSideBar";
import EnhancedTable from "../../../components/table/table";
import "./HistoryPage.css";
import { ProSidebarProvider } from "react-pro-sidebar";
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
      "2023-11-07 08:36",
      "2023-11-07 08:42",
      5
    ),
    createData(
      2,
      2110992,
      3,
      "def.pdf",
      "2023-11-08 08:32",
      "2023-11-08 9:01",
      13
    ),
    createData(
      2,
      2110992,
      3,
      "def.pdf",
      "2023-11-08 08:32",
      "2023-11-08 9:01",
      13
    ),
    createData(
      2,
      21109922,
      3,
      "def.pdf",
      "2023-11-08 08:32",
      "2023-11-08 9:01",
      13
    ),
    createData(
      2,
      21120992,
      3,
      "def.pdf",
      "2023-11-08 08:32",
      "2023-11-08 9:01",
      13
    ),
    createData(
      2,
      21102992,
      3,
      "def.pdf",
      "2023-11-08 08:32",
      "2023-11-08 9:01",
      13
    ),
    createData(
      2,
      21109292,
      3,
      "def.pdf",
      "2023-11-08 08:32",
      "2023-11-08 9:01",
      13
    ),
    createData(
      2,
      21120992,
      3,
      "def.pdf",
      "2023-11-08 08:32",
      "2023-11-08 9:01",
      13
    ),
  ];

  return (
    <div>
      <div className="history-page-container">
        <ProSidebarProvider>
          <UserSideBar />
        </ProSidebarProvider>
        <div className="history-page-content">
          <h1>Sinh viên</h1>
          <h2>Dịch vụ sinh viên</h2>
          <EnhancedTable
            rows={rows}
            headCells={headCells}
            numColumns={7}
            tableName={"Lịch sử in"}
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
