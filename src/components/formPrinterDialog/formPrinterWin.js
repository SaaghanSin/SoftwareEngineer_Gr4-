import React from "react";
import "./formPrinterWin.css";
import Formmayin from "../form_mayin/form_mayin";
import { IoCloseCircle } from "react-icons/io5";
const FormPrinterWin = ({ handleClose }) => {
  return (
    <div className="formPrinter-win-container">
      <div className="formPrinter-win-content">
        <Formmayin />
        <div className="closemyeye">
          <IoCloseCircle
            onClick={handleClose}
            style={{ fontSize: "28px" }}
          ></IoCloseCircle>
        </div>
      </div>
    </div>
  );
};

export default FormPrinterWin;
