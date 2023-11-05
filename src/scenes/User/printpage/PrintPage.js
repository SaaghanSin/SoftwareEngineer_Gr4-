import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import UserSideBar from "../../../components/sideBar/userSideBar";
import "./PrintPage.css";
import MyButton from "../../../components/button/Button";
import Button from "react-bootstrap/Button";
import TextField from "../../../components/textField/textField";
import BalancePage from "../balancepage/BalancePage";
import HistoryPage from "../historypage/HistoryPage";
import CheckboxWithDescription from "../../../components/checkBox/checkbox";
import OptionField from "../../../components/optionField/optionField";
import Dialog from "@mui/material/Dialog";
// ... (imports)

const PrintPage = () => {
  const descriptions = {
    field1: "Chọn file để in",
    field2: "Số bản copy",
    checkboxField: "In hai mặt",
    optionField: "Chọn trang in",
  };
  const options = ["Toàn bộ", "Trang đã chọn"];
  const [inputValues, setInputValues] = useState({
    field1: "",
    field2: "",
    checkboxField: false,
    selectedOptionIndex: 0,
    value: "",
  });
  const [dialogValues, setDialogValues] = useState({
    field1: "",
    field2: "",
    checkboxField: false,
    selectedOptionIndex: 0,
    value: "",
  });

  const [open, setOpen] = useState(false);
  const [currentFields, setCurrentFields] = useState([]);

  const handleOpen = (fields) => {
    setCurrentFields(fields.concat(["selectedOptionIndex", "value"]));
    setDialogValues({ ...inputValues });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (field, value) => {
    if (field === "selectedOptionIndex" || field === "value") {
      return;
    }

    setDialogValues((prevDialogValues) => ({
      ...prevDialogValues,
      [field]: value,
    }));
  };

  const handleSaveChanges = () => {
    const { selectedOptionIndexLocal, valueLocal, ...rest } = dialogValues;

    setInputValues({
      ...rest,
      selectedOptionIndex: inputValues.selectedOptionIndex, // Use the original value for selectedOptionIndex
      value: inputValues.value, // Use the original value for value
    });
    setOpen(false);
  };

  return (
    <div className="print-page-container">
      <UserSideBar />
      <Routes>
        <Route path="/print" element={<PrintPage />} />
        <Route path="/balance" element={<BalancePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
      <div className="print-page-content">
        <h1>Sinh viên</h1>
        <h2>Dịch vụ sinh viên</h2>
        <div className="print-function">
          <MyButton>Tải lên file</MyButton>
          <Button
            onClick={() => handleOpen(["field1", "field2", "checkboxField"])}
          >
            Chọn thông số in
          </Button>
          <MyButton>Chọn máy in</MyButton>
        </div>
        <Dialog open={open} onClose={handleClose}>
          <div style={{ padding: "20px" }}>
            {currentFields.map((field) => (
              <div key={field}>
                {field === "checkboxField" ? (
                  <CheckboxWithDescription
                    description={descriptions[field]}
                    isChecked={dialogValues[field]}
                    onChange={(value) => handleInputChange(field, value)}
                  />
                ) : field === "selectedOptionIndex" || field === "value" ? (
                  <OptionField
                    description={
                      descriptions[
                        field === "selectedOptionIndex"
                          ? "Chọn trang in"
                          : "Trang in"
                      ]
                    }
                    options={["Toàn bộ", "Trang đã chọn"]}
                    selectedOptionIndex={
                      dialogValues[
                        field === "selectedOptionIndex"
                          ? "selectedOptionIndex"
                          : "value"
                      ]
                    }
                    value={
                      dialogValues[
                        field === "selectedOptionIndex"
                          ? "value"
                          : "selectedOptionIndex"
                      ]
                    }
                    // Prevent the OptionField component from changing its value when the user selects an option
                    onChange={(index) => {}}
                  />
                ) : (
                  <TextField
                    description={descriptions[field]}
                    value={dialogValues[field]}
                    onChange={(value) => handleInputChange(field, value)}
                  />
                )}
              </div>
            ))}
            <Button onClick={handleSaveChanges}>Save</Button>
          </div>
        </Dialog>
        <div className="print-info">
          <h3>Thông tin đã chọn</h3>
          <div className="print-info-1">
            <div className="textbox-container">
              <div className="description">Chọn file để in</div>
              <input
                type="text"
                className="textbox"
                value={inputValues.field1}
                readOnly
              />
            </div>
            <div className="textbox-container">
              <div className="description">Số bản copy</div>
              <input
                type="text"
                className="textbox"
                value={inputValues.field2}
                readOnly
              />
            </div>
            <CheckboxWithDescription
              description={descriptions.checkboxField}
              isChecked={inputValues.checkboxField}
              onChange={(value) =>
                setDialogValues((prevDialogValues) => ({
                  ...prevDialogValues,
                  checkboxField: value,
                }))
              }
            />
            <OptionField
              description="Chọn trang in"
              options={["Toàn bộ", "Trang đã chọn"]}
              selectedOptionIndex={dialogValues.selectedOptionIndex}
              value={dialogValues.value}
              onChange={(index) => {
                setDialogValues((prevDialogValues) => ({
                  ...prevDialogValues,
                  selectedOptionIndex: index,
                  value: options[index],
                }));
              }}
            />
          </div>
          <div className="print-info-2">
            <TextField description="Tòa" />
            <TextField description="Máy in" />
            <MyButton>Xác nhận in</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintPage;
