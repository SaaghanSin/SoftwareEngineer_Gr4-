import React from "react";
import DropdownPrint from "../dropdown/dropdown";
import { useState } from "react";
import "./form_mayin.css";
import { IoCloseCircle } from "react-icons/io5";
import Button_login from "../button/button_login/button_login";
import axios from "../../api/axios";
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
  const [formData, setFormData] = useState({
    MaMayIn: "",
    CoSo: "",
    Toa: "",
    LoaiMayIn: "",
    TrangThaiHoatDong: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can now access the form data in the formData state
    //   console.log(formData);
    //     const data1={
    //   MaMayIn=formData.MaMayIn,
    //   CoSo=formData.CoSo,
    //   Toa=formData.Toa,
    //   LoaiMayIn=formData.LoaiMayIn,
    //   TrangThaiHoatDong=formData.TrangThaiHoatDong,
    // }
    try {
      // Make a POST request to your PHP script
      const formData2 = new FormData();
      formData2.append("MaMayIn", formData.MaMayIn);
      formData2.append("CoSo", formData.CoSo);
      formData2.append("Toa", formData.Toa);
      formData2.append("LoaiMayIn", formData.LoaiMayIn);
      formData2.append("TrangThaiHoatDong", formData.TrangThaiHoatDong);
      const response = await axios.post(
        `http://localhost/spso-service/src/api/AddPrinter.php`,
        formData2
      );
      window.location.reload();
      console.log("Response:", response.data);
    } catch (error) {
      console.log("Error during login:222");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="divform">
        <div class="label-container214">
          <label class="label-11">Mã máy in:</label>
          <br />

          <label class="label-22">Cơ sở:</label>
          <br />

          <label class="label-33">Tòa:</label>
          <br />

          <label class="label-44">Loại máy in:</label>
          <br />

          <label class="label-55">Trạng thái hoạt động:</label>
          <br />
        </div>
        <div class="dropdown-container12345">
          <input
            type="text"
            name="MaMayIn"
            value={formData.MaMayIn}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="CoSo"
            value={formData.CoSo}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="Toa"
            value={formData.Toa}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="LoaiMayIn"
            value={formData.LoaiMayIn}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="TrangThaiHoatDong"
            value={formData.TrangThaiHoatDong}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button type="submit" className="formbutton">
        Thêm máy in
      </button>
    </form>
  );
};

export default Formmayin;
