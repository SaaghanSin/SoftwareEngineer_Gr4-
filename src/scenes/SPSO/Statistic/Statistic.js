import React, {useState} from "react";
// import { DataGrid } from "@mui/x-data-grid";
import "./Statistic.css";
import EnhancedTable from "../../../components/table/table";
import SPSOSidebar from "../../../components/sideBar/spsoSideBar";

const Datepicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (event) => {
    const dateValue = event.target.value;
    setStartDate(dateValue);
  };

  const handleEndDateChange = (event) => {
    const dateValue = event.target.value;
    setEndDate(dateValue);
  };

  return (
    <div>
      <label htmlFor="datepicker" className = "set-datepicker">Từ </label>
      <input
        type="date"
        id="datepicker"
        value={startDate}
        onChange={handleStartDateChange}
      />
      <label htmlFor="datepicker" className = "set-datepicker">đến </label>
      <input
        type="date"
        id="datepicker"
        value={endDate}
        onChange={handleEndDateChange}
      />
    </div>
    );
};
const Statistic = () => {
  function createData(id, IDPrinter,Block, Room, Type, Number_of_uses,Last_used) {
    return {
      id,
      IDPrinter,
      Block,
      Room,
      Type,
      Number_of_uses,
      Last_used,
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
      id: "Number_of_uses",
      numeric: true,
      disablePadding: false,
      label: "Số lần sử dụng",
    },
    {
      id: "Last_used",
      numeric: false,
      disablePadding: false,
      label: "Lần sử dụng gần nhất",
    },
  ];
  const rows = [
    createData(1, "C2 - H1 - 101", "H1",101, "Laser", 3, "2h trước"),
    createData(2, "C2 - H3 - 101", "H3",101, "Laser", 11, "11h trước"),
    createData(3, "C2 - H6 - 101", "H6",101, "Laser", 6, "13m trước"),
    createData(3, "C2 - H6 - 512", "H6", 512, "Laser", 0, "//"),
  ];
  return(
    <div className = "statistic-page-container">
        <SPSOSidebar />
        <div className = "flex-container">
          <div className = "statistic-page-content">
            <h1>Ban quản lí</h1>
            <div className = "head-right">Dịch vụ cho quản lí</div>
          </div>
          <>
            <div className = "list-3">
              <div className = "set-list">Ngày</div>
              <div>
              <Datepicker />
              </div>
            </div>
            <div className = "list-3">
              <div className = "set-list">Cơ sở</div>
              <div className = "statistic-list">
                <ul>
                  <li>
                    <label>
                    <input type="radio" name="gender" value="male"className ="check-box"/>
                    1
                    </label>
                  </li>
                  <li>
                   <label>
                      <input type="radio" name="gender" value="male"className ="check-box"/>
                      2
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className = "list-3">
              <div className = "set-list">Loại máy in</div>
              <div className = "statistic-list">
                <ul>
                   <li>
                   <label>
                      <input type="checkbox" name="subscribe" value="yes" className ="check-box"/>
                      Laser
                    </label>
                  </li>
                  <li>
                   <label>
                      <input type="checkbox" name="subscribe" value="yes" className ="check-box"/>
                      HP
                    </label>
                  </li>
                  <li>
                   <label>
                      <input type="checkbox" name="subscribe" value="yes" className ="check-box"/>
                      Canon
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </>
          <div>
            <button  className = "set-button">
              Lọc
            </button>
          </div>
          <div className = "statistic-page-content">
            <EnhancedTable
            rows={rows}
            headCells={headCells}
            numColumns={6}
          />
          </div>
        </div>
    </div>
  );
};
export default Statistic;
