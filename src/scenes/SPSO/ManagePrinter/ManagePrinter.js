import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";
import "./ManagePrinter.css";
import EnhancedTable from "../../../components/table/table";
import SPSOSidebar from "../../../components/sideBar/spsoSideBar";
const ManagePrinter = () => {
  function createData(id, IDPrinter, Campus, Block, Room, Type, Status) {
    return {
      id,
      IDPrinter,
      Campus,
      Block,
      Room,
      Type,
      Status,
    };
  }
  const headCells = [
    {
      id: "IDPrinter",
      numeric: false,
      disablePadding: true,
      label: " ID",
    },
    {
      id: "Campus",
      numeric: true,
      disablePadding: false,
      label: "Cơ sở",
    },
    {
      id: "Block",
      numeric: false,
      disablePadding: false,
      label: "Tòa",
    },
    {
      id: "Room",
      numeric: false,
      disablePadding: false,
      label: "Phòng",
    },
    {
      id: "Type",
      numeric: false,
      disablePadding: false,
      label: "Loại máy in",
    },
    {
      id: "Status",
      numeric: false,
      disablePadding: false,
      label: "Trạng thái",
    },
  ];
  const rows = [
    createData(1, "C1 - A1 - 101", 1, "A1", 101, "Lazer", "Hoạt động"),

    createData(2, "C1 - A1 - 103", 1, "A1", 103, "Lazer", "Ngừng hoạt động"),
    createData(3, "C1 - A1 - 102", 1, "A1", 102, "Lazer", "Ngừng hoạt động"),
  ];
  return (
    <div className="manage-page-container">
      <SPSOSidebar />
      <div className="manage-page-content">
        <h1>Ban quản lí</h1>
        <h2>Dịch vụ quản lí</h2>
        <EnhancedTable
          rows={rows}
          headCells={headCells}
          numColumns={6}
          tableName={"Danh sách máy in"}
        />
      </div>
    </div>
  );
};
export default ManagePrinter;
