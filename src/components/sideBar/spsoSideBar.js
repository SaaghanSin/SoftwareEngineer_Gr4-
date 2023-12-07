import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaChartBar, FaPrint, FaHistory, FaBook } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import "./spsoSideBar.css";
import SideBarHeader from "./sideBarHeader";
import SideBarFooter from "./sideBarFooter";
import AboveSideBar from "./sideBarAbove";
import pdf from "../../assets/pdf/guide.pdf";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
const SPSOSidebar = () => {
  const location = useLocation();
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  useEffect(() => {
    // Extract the last part of the path as the selected menu item
    const pathParts = location.pathname.split("/");
    const lastPath = pathParts[pathParts.length - 1];
    setSelectedMenuItem(lastPath);
  }, [location.pathname]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usr");
    localStorage.removeItem("role");
  };
  return (
    <Sidebar className="spso-side-bar" backgroundColor="#0c0b3b">
      <AboveSideBar />

      <SideBarHeader />
      <Menu iconShape="square">
        <Link
          to="/printinfo"
          className={`link-style sidebar-btn ${
            selectedMenuItem === "printinfo" ? "selected" : ""
          }`}
        >
          <MenuItem icon={<FaPrint />}>Thông số in mặc định</MenuItem>
        </Link>
        <Link
          to="/printmanage"
          className={`link-style sidebar-btn ${
            selectedMenuItem === "printmanage" ? "selected" : ""
          }`}
        >
          <MenuItem icon={<FaPrint />}>Quản lí máy in</MenuItem>
        </Link>
        <a
          href={pdf}
          target="_blank"
          className={`link-style sidebar-btn ${
            selectedMenuItem === "guide.pdf" ? "selected" : ""
          }`}
        >
          <MenuItem icon={<FaBook />}>Tài liệu hướng dẫn</MenuItem>
        </a>
        <Link
          to="/statistic"
          className={`link-style sidebar-btn ${
            selectedMenuItem === "statistic" ? "selected" : ""
          }`}
        >
          <MenuItem icon={<FcStatistics />}>Thống kê</MenuItem>
        </Link>
        <Link
          to="/"
          onClick={handleLogout}
          className={`link-style sidebar-btn ${
            selectedMenuItem === "" ? "selected" : ""
          }`}
        >
          <MenuItem icon={<LogoutRoundedIcon />}>Đăng xuất</MenuItem>
        </Link>
      </Menu>
      <div
        className="sidebar-btn-wrapper"
        style={{
          padding: "20px 24px",
          textAlign: "center",
        }}
      >
        <SideBarFooter />
      </div>
    </Sidebar>
  );
};

export default SPSOSidebar;
