import React from "react";
import DropdownPrint from "../dropdown/dropdown";
import { useState } from "react";
import "./form_mayin.css";
import { IoCloseCircle } from "react-icons/io5";
import Button_login from "../button/button_login/button_login";
const Formmayin = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const [selectedOption5, setSelectedOption5] = useState(null);
  const dropdownData2 = [
    { value: "option1", label: "A3" },
    { value: "option2", label: "A4" },
    { value: "option3", label: "A5" },
  ];
  const handleDropdownChange1 = (selectedValue) => {
    setSelectedOption1(selectedValue);
  };
  const handleDropdownChange2 = (selectedValue) => {
    setSelectedOption2(selectedValue);
  };
  const handleDropdownChange3 = (selectedValue) => {
    setSelectedOption3(selectedValue);
  };
  const handleDropdownChange4 = (selectedValue) => {
    setSelectedOption4(selectedValue);
  };
  const handleDropdownChange5 = (selectedValue) => {
    setSelectedOption5(selectedValue);
  };
  return (
    <div className="divform">
      <div className="benphai123">
        <div className="label-container214">
          <label htmlFor="dropdown1" className="label-11">
            Cở sở
          </label>
          <label htmlFor="dropdown2" className="label-22">
            Tòa
          </label>
          <label htmlFor="dropdown3" className="label-33">
            Phòng
          </label>
          <label htmlFor="dropdown4" className="label-44">
            Loại máy in
          </label>
          <label htmlFor="dropdown5" className="label-55">
            Trạng thái
          </label>
        </div>
        <div className="dropdown-container12345">
          <div className="dong1">
            <DropdownPrint
              id="dropdown1"
              data={dropdownData2}
              selectedOption={selectedOption1}
              onDropdownChange={handleDropdownChange1}
            />
          </div>
          <div className="dong2">
            <DropdownPrint
              id="dropdown2"
              data={dropdownData2}
              selectedOption={selectedOption2}
              onDropdownChange={handleDropdownChange2}
            />
          </div>
          {/* <div className="dong2">
            <NumField2 value={quantity} onChange={handleQuantityChange} />
          </div> */}
          <div className="dong3">
            {/* <label className="label3_dropdown" htmlFor="dropdown3">
                Dropdown 3 Label:
              </label> */}

            <DropdownPrint
              id="dropdown3"
              data={dropdownData2}
              selectedOption={selectedOption3}
              onDropdownChange={handleDropdownChange3}
            />
          </div>
          <div className="dong4">
            {/* <label className="label4_dropdown" htmlFor="dropdown4">
                Dropdown 4 Label:
              </label> */}
            <DropdownPrint
              id="dropdown4"
              data={dropdownData2}
              selectedOption={selectedOption4}
              onDropdownChange={handleDropdownChange4}
            />
          </div>
          <div className="dong5">
            {/* <label className="label5_dropdown" htmlFor="dropdown5">
                Dropdown 5 Label:
              </label> */}
            <DropdownPrint
              id="dropdown5"
              data={dropdownData2}
              selectedOption={selectedOption5}
              onDropdownChange={handleDropdownChange5}
            />
          </div>
        </div>
        <div className="diviconn">
          {" "}
          <IoCloseCircle style={{ fontSize: "28px" }} />
        </div>
      </div>
      <div className="button_inform">
        <Button_login>Thêm máy in</Button_login>
        <Button_login>Hủy bỏ</Button_login>
      </div>
    </div>
  );
};

export default Formmayin;
