import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  ProSidebarProvider,
} from "react-pro-sidebar";
import { FaChartBar, FaPrint, FaHistory, FaBook } from "react-icons/fa";
import "./userSideBar.css";
import SideBarHeader from "./sideBarHeader";
import SideBarFooter from "./sideBarFooter";
import AboveSideBar from "./sideBarAbove";
import pdf from "../../assets/pdf/guide.pdf";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Clock from "../clock/clock";
const UserSideBar = () => {
  const location = useLocation();
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  useEffect(() => {
    // Extract the last part of the path as the selected menu item
    const pathParts = location.pathname.split("/");
    const lastPath = pathParts[pathParts.length - 1];
    setSelectedMenuItem(lastPath);
  }, [location.pathname]);
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      console.log(true);
      collapseSidebar();
    } else {
      console.log(false);
      collapseSidebar();
    }
  };
  return (
    <Sidebar
      style={{
        backgroundColor: "#0c0b3b",
        color: "white",
        position: "fixed",
        top: 0,
        bottom: 0,
        overflowY: "auto",
        transition: "all 0.3s",
        zIndex: 1000,
      }}
      backgroundColor="#0c0b3b"
    >
      <AboveSideBar />

      <SideBarHeader />
      <Menu iconShape="square">
        <Link
          to="/print"
          className={`link-style sidebar-btn ${
            selectedMenuItem === "print" ? "selected" : ""
          }`}
        >
          <MenuItem icon={<FaPrint />}>Dịch vụ in</MenuItem>
        </Link>
        <Link
          to="/balance"
          className={`link-style sidebar-btn ${
            selectedMenuItem === "balance" ? "selected" : ""
          }`}
        >
          <MenuItem icon={<FaChartBar />}>Xem số trang in</MenuItem>
        </Link>
        <Link
          to="/history"
          className={`link-style sidebar-btn ${
            selectedMenuItem === "history" ? "selected" : ""
          }`}
        >
          <MenuItem icon={<FaHistory />}>Xem lịch sử in</MenuItem>
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
          to="/"
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
        <Clock></Clock>
        <SideBarFooter />
      </div>
    </Sidebar>
  );
};

export default UserSideBar;
