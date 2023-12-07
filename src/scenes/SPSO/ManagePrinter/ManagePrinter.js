import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { DataGrid } from "@mui/x-data-grid";
import "./ManagePrinter.css";
import EnhancedTable from "../../../components/table/table";
import SPSOSidebar from "../../../components/sideBar/spsoSideBar";
import Button_login from "../../../components/button/button_login/button_login";
import Button_mayin from "../../../components/button/button_mayin/button_mayin";
import FromPrinterWin from "../../../components/formPrinterDialog/formPrinterWin";

const ManagePrinter = () => {
  const [showTable, setShowTable] = useState(false);
  const [Stat, setStat] = useState("Hiện");
  const [tableData, setTableData] = useState([
    {
      MaMayIn: "MAY02",
      CoSo: "1",
      Toa: "B212",
      LoaiMayIn: "Lazer",
      TrangThaiHoatDong: "Hoàn Thành",
    },
    {
      MaMayIn: "MAY03",
      CoSo: "2",
      Toa: "H3",
      LoaiMayIn: "Lazer",
      TrangThaiHoatDong: "Hoàn Thành",
    },
  ]);

  useEffect(() => {
    // Function to fetch data using Axios when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/spso-service/src/api/XemMayIn.php"
        );
        // const data = await response.json();
        const rawData = await response.text();
        const data = JSON.parse(rawData);
        // Convert the data into a nested array
        // const nestedArray = [data];
        setTableData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetch function
  }, []);
  let latestId = 0;

  function CreateTable(tabData) {
    if (Stat == "Hiện") {
      setShowTable(true);
      setStat("Đóng");
    } else {
      setShowTable(false);
      setStat("Hiện");
    }
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
  function createData(IDPrinter, Campus, Block, Type, Status) {
    // Increment the latestId before using it
    latestId += 1;
    return {
      id: latestId,
      IDPrinter,
      Campus,
      Block,
      Type,
      Status,
    };
  }
  const abc = tableData;
  // Flatten the nested array and create rows using createData function
  const rowsJr = abc.map((item) => {
    return createData(
      item["MaMayIn"],
      item["CoSo"],
      item["Toa"],
      item["LoaiMayIn"],
      item["TrangThaiHoatDong"]
    );
  });
  const [showPrinterForm, setShowPrinterForm] = useState(false);
  const handleShowPrinterForm = () => {
    setShowPrinterForm(true);
  };
  const handleClosePrinterForm = () => {
    setShowPrinterForm(false);
  };

  return (
    <div className="manage-page-container">
      <SPSOSidebar />
      <div className="manage-page-content">
        {/* <h1>Ban quản lí</h1> */}
        <h2>Dịch vụ quản lí</h2>
        <Button_login onClick={CreateTable}>{Stat} </Button_login>
        <h2></h2>
        {showTable && (
          <div className="tablemayin">
            <EnhancedTable
              rows={rowsJr}
              headCells={headCells}
              numColumns={6}
              tableName={"Danh sách máy in"}
            />
          </div>
        )}
        <div className="buttonmayin">
          <Button_login onClick={handleShowPrinterForm}>
            Thêm máy in
          </Button_login>
          <Button_login>Xóa máy in</Button_login>
          <Button_mayin>Điều chỉnh thông tin máy in</Button_mayin>
        </div>
      </div>
      {showPrinterForm && (
        <FromPrinterWin handleClose={handleClosePrinterForm} />
      )}
    </div>
  );
};
export default ManagePrinter;
