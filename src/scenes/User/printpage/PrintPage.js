import "./PrintPage.css";
import UserSideBar from "../../../components/sideBar/userSideBar";
import FileUpload from "../../../components/fileUpload/FileUpload";
import { ProSidebarProvider } from "react-pro-sidebar";
const PrintPage = () => {
  return (
    <div className="print-page-container">
      <ProSidebarProvider>
        <UserSideBar />
      </ProSidebarProvider>
      <div className="print-page-content">
        <h2>Dịch vụ quản lí</h2>
        <FileUpload />
      </div>
    </div>
  );
};
export default PrintPage;
