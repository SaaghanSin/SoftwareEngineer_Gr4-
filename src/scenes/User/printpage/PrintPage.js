import React, { useState, useEffect } from "react";
import "./PrintPage.css";
import UserSideBar from "../../../components/sideBar/userSideBar";
import { ProSidebarProvider } from "react-pro-sidebar";
import DropFileInput from "../../../components/drop-file-input/DropFileInput";
import DropdownPrint from "../../../components/dropdown/dropdown";
import { useMyContext } from "../../../components/contextModify";
import NumField2 from "../../../components/numField/NumField2";
import Button_login from "../../../components/button/button_login/button_login";
import { Checkbox } from "@nextui-org/react";
import LoadingWin from "../../../components/loadingDialog/loadingWin";
// import { getTypeName } from "./PrinterInfo"; // Import the getTypeName function from PrinterInfo

const PrintPage = () => {
  const [selectedOption3, setSelectedOption3] = useState("option1");
  const [selectedOption4, setSelectedOption4] = useState("option1");
  const [selectedOption5, setSelectedOption5] = useState("option1");
  const [selectedOption7, setSelectedOption7] = useState("option1");
  const [selectedOption8, setSelectedOption8] = useState("option1");
  const [selectedOption9, setSelectedOption9] = useState("option1");
  const [selectedOption10, setSelectedOption10] = useState("option1");
  const [selectNumberPage, setSelectNumberPage] = useState(null);
  const [selectNumberPage2, setSelectNumberPage2] = useState(false);
  // Retrieve data from local storage on component mount
  useEffect(() => {
    const storedSelectedTypes = localStorage.getItem("selectedTypes");
    if (storedSelectedTypes) {
      const parsedSelectedTypes = JSON.parse(storedSelectedTypes);
      // Use parsedSelectedTypes as needed, for example, set it to selectedTypescontext
    }
  }, []);
  const [inputSelectFile, setInputSelectFile] = useState("");
  const storedSelectedTypes = JSON.parse(localStorage.getItem("selectedTypes"));

  const dropdownData2 = [
    { value: "option1", label: "A3" },
    { value: "option2", label: "A4" },
    { value: "option3", label: "A5" },
  ];
  const dropdownData3 = [
    { value: "option1", label: "1" },
    { value: "option2", label: "2" },
    { value: "option3", label: "4" },
    { value: "option3", label: "6" },
    { value: "option3", label: "9" },
  ];
  const dropdownData4 = [
    { value: "option1", label: "Một mặt" },
    { value: "option2", label: "Hai mặt" },
  ];
  const dropdownData7 = [
    { value: "option1", label: "Cở sở 1" },
    { value: "option2", label: "Cở sở 2" },
  ];
  const dropdownData8 = [
    { value: "option1", label: "H1" },
    { value: "option2", label: "H2" },
    { value: "option2", label: "H3" },
    { value: "option2", label: "H6" },
  ];
  const dropdownData9 = [
    { value: "option1", label: "A1" },
    { value: "option2", label: "A2" },
    { value: "option2", label: "A3" },
  ];
  const fileData = storedSelectedTypes.map((item, index) => ({
    value: `option${index + 1}`,
    label: getTypeName(item),
  }));

  console.log("check array123", storedSelectedTypes);

  const handleDropdownChange3 = (selectedValue) => {
    setSelectedOption3(selectedValue);
  };
  const handleDropdownChange4 = (selectedValue) => {
    setSelectedOption4(selectedValue);
  };
  const handleDropdownChange5 = (selectedValue) => {
    setSelectedOption5(selectedValue);
  };
  const handleDropdownChange7 = (selectedValue) => {
    setSelectedOption7(selectedValue);
  };
  const handleDropdownChange8 = (selectedValue) => {
    setSelectedOption8(selectedValue);
  };
  const handleDropdownChange9 = (selectedValue) => {
    setSelectedOption9(selectedValue);
  };
  const handleDropdownChange10 = (selectedValue) => {
    setSelectedOption10(selectedValue);
  };
  const [quantity, setQuantity] = useState(0);
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };
  const handleClicknumberpage = (selectedValue) => {
    setSelectNumberPage(selectedValue);
  };
  const onFileChange = (files) => {
    console.log(files);
  };

  const [showLoadingWin, setShowLoadingWin] = useState(false);

  const handleShowLoadingWin = () => {
    // Check if all required options are selected
    if (
      !selectedOption3 ||
      !selectedOption4 ||
      !selectedOption5 ||
      !selectedOption7 ||
      !selectedOption8 ||
      !selectedOption9 ||
      !selectedOption10 ||
      selectNumberPage === null
    ) {
      // Alert the user that all options must be selected
      alert("Please select all options before proceeding.");
      return;
    }

    // Check if the page range has the correct format
    if (selectNumberPage === "select" && !/^\d+-\d+$/.test(inputSelectFile)) {
      alert(
        "Invalid input format. Please enter in the format 'number - number'."
      );
      return;
    }
    if (quantity == 0) {
      alert("The number of page to print must be higher than 0");
      return;
    }

    // Proceed with showing the loading window
    setShowLoadingWin(true);
  };

  const handleCloseLoadingWin = () => {
    setShowLoadingWin(false);
  };
  return (
    <div className="print-page-container">
      <ProSidebarProvider>
        <UserSideBar />
      </ProSidebarProvider>
      <div className="print-page-content">
        <h2>Dịch vụ quản lí</h2>
        <div className="mainprint">
          {}
          <div className="boxupload">
            <h2 className="headerupload">Upload file</h2>
            <DropFileInput onFileChange={(files) => onFileChange(files)} />
          </div>
          <div>
            <div className="benphai">
              <div className="label-container">
                <label htmlFor="dropdown2" className="label-1">
                  Số bản copies
                </label>
                <label htmlFor="dropdown3" className="label-3">
                  Kích thước trang
                </label>
                <label htmlFor="dropdown4" className="label-4">
                  Pages per sheet
                </label>
                <label htmlFor="dropdown5" className="label-5">
                  Sided
                </label>
                <label htmlFor="dropdown6" className="label-6">
                  Đánh số trang in
                </label>
                <label htmlFor="dropdown7" className="label-7">
                  Thời gian hẹn lấy
                </label>
                <label htmlFor="dropdown8" className="label-8">
                  Chọn cơ sở
                </label>
                <label htmlFor="dropdown9" className="label-9">
                  Chọn tòa
                </label>
                <label htmlFor="dropdown10" className="label-10">
                  Chọn máy in
                </label>
              </div>
              <div className="dropdown-container123">
                <div className="dong2">
                  <NumField2 value={quantity} onChange={handleQuantityChange} />
                </div>
                <div className="dong3">
                  <DropdownPrint
                    id="dropdown3"
                    data={dropdownData2}
                    selectedOption={selectedOption3}
                    onDropdownChange={handleDropdownChange3}
                  />
                </div>
                <div className="dong4">
                  <DropdownPrint
                    id="dropdown4"
                    data={dropdownData3}
                    selectedOption={selectedOption4}
                    onDropdownChange={handleDropdownChange4}
                  />
                </div>
                <div className="dong5">
                  <DropdownPrint
                    id="dropdown5"
                    data={dropdownData4}
                    selectedOption={selectedOption5}
                    onDropdownChange={handleDropdownChange5}
                  />
                </div>
                <div className="dongchonpage">
                  <label class="container">
                    All pages
                    <input
                      className="allpages"
                      type="checkbox"
                      checked={selectNumberPage === "all"}
                      onChange={() => handleClicknumberpage("all")}
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container">
                    Select pages
                    <input
                      type="checkbox"
                      checked={selectNumberPage === "select"}
                      onChange={() => handleClicknumberpage("select")}
                    />
                    <span class="checkmark"></span>
                  </label>
                  <input
                    className="inputselectfile"
                    disabled={selectNumberPage === "all"}
                    placeholder={
                      selectNumberPage === "all" ? "Disabled" : "VD: 1-5"
                    }
                    value={inputSelectFile}
                    onChange={(e) => setInputSelectFile(e.target.value)}
                  ></input>
                </div>

                <div className="dong7">
                  <DropdownPrint
                    id="dropdown7"
                    data={dropdownData7}
                    selectedOption={selectedOption7}
                    onDropdownChange={handleDropdownChange7}
                  />
                </div>
                <div className="dong8">
                  {/* <label className="label8_dropdown" htmlFor="dropdown8">
                Dropdown 8 Label:
              </label> */}
                  <DropdownPrint
                    id="dropdown8"
                    data={dropdownData7}
                    selectedOption={selectedOption8}
                    onDropdownChange={handleDropdownChange8}
                  />
                </div>
                <div className="dong9">
                  {/* <label className="label9_dropdown" htmlFor="dropdown9">
                Dropdown 9 Label:
              </label> */}
                  <DropdownPrint
                    id="dropdown9"
                    data={dropdownData9}
                    selectedOption={selectedOption9}
                    onDropdownChange={handleDropdownChange9}
                  />
                </div>
                <div className="dong10">
                  {/* <label className="label9_dropdown" htmlFor="dropdown9">
                Dropdown 9 Label:
              </label> */}
                  <DropdownPrint
                    id="dropdown10"
                    data={dropdownData9}
                    selectedOption={selectedOption10}
                    onDropdownChange={handleDropdownChange10}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tienhanhin">
          <Button_login onClick={handleShowLoadingWin}>
            Tiến hành in
          </Button_login>
        </div>
        {showLoadingWin && <LoadingWin handleClose={handleCloseLoadingWin} />}
      </div>
    </div>
  );
};
function getTypeName(type) {
  switch (type) {
    case 1:
      return "DOC";
    case 2:
      return "PDF";
    case 3:
      return "TXT";
    case 4:
      return "PPTX";
    case 5:
      return "XLSX";
    default:
      return "";
  }
}
export default PrintPage;
