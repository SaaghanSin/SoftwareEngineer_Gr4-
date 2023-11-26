import "./PrintPage.css";
import UserSideBar from "../../../components/sideBar/userSideBar";
import FileUpload from "../../../components/fileUpload/FileUpload";
import { ProSidebarProvider } from "react-pro-sidebar";
import Clock from "../../../components/clock/clock";
import { Row } from "react-bootstrap";
import DropFileInput from "../../../components/drop-file-input/DropFileInput";

const PrintPage = () => {
  const onFileChange = (files) => {
    console.log(files);
  };

  return (
    <div className="print-page-container">
      <ProSidebarProvider>
        <UserSideBar />
      </ProSidebarProvider>
      <div className="print-page-content">
        <h2>Dịch vụ quản lí</h2>
        <div className="boxupload">
          <h2 className="headerupload">Upload file mệt quá mập :))</h2>
          <DropFileInput onFileChange={(files) => onFileChange(files)} />
        </div>
      </div>
    </div>
  );
};
export default PrintPage;
// import "./PrintPage.css";
// import { ProSidebarProvider } from "react-pro-sidebar";
// import DropFileInput from "../../../components/drop-file-input/DropFileInput";
// import UserSideBar from "../../../components/sideBar/userSideBar";
// function Printpage() {
//   const onFileChange = (files) => {
//     console.log(files);
//   };

//   return (
//     <div>
//       <ProSidebarProvider>
//         <UserSideBar />
//       </ProSidebarProvider>
//       <div className="boxupload">
//         <h2 className="headerupload">React drop files input</h2>
//         <DropFileInput onFileChange={(files) => onFileChange(files)} />
//       </div>
//     </div>
//   );
// }

// export default Printpage;
