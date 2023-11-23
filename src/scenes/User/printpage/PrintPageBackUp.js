import { useState } from "react";
import UserSideBar from "../../../components/sideBar/userSideBar";
import "./PrintPage.css";
import Button from "react-bootstrap/Button";
import TextField from "../../../components/textField/textField";
import CheckboxWithDescription from "../../../components/checkBox/checkbox";
import OptionField from "../../../components/optionField/optionField";
import Dialog from "@mui/material/Dialog";
import Button_print from "../../../components/button/button_print/button_print";
import { Box } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";
import "../../../components/option_info/option1.css";
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
      <ProSidebarProvider>
        <UserSideBar />
      </ProSidebarProvider>
      <div className="print-page-content" style={{ zIndex: 999 }}>
        <h2>Dịch vụ sinh viên</h2>
        <div className="print-function">
          <Button_print className="taifilelen">Tải lên file</Button_print>
          <Button_print
            className="chonthongsoin"
            onClick={() => handleOpen(["field1", "field2", "checkboxField"])}
          >
            Chọn thông số in
          </Button_print>
          <Button_print>Chọn máy in</Button_print>
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
            <Button className="save" onClick={handleSaveChanges}>
              Save
            </Button>
          </div>
        </Dialog>
        <Box className="myboxx">
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
                <div className="description2"> Số bản copy</div>
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
              <Button_print className="printbuttonn">Xác nhận in</Button_print>
            </div>
          </div>
        </Box>
      </div>
      <div className="bodyoption1">
        {/* <button className="HCMUT" onClick={handleClick}>
        HCMUT
      </button> */}
        <div className="footer-main"></div>
      </div>
    </div>
  );
};

export default PrintPage;
