import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaChartBar, FaPrint, FaHistory, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./userSideBar.css";
import SideBarHeader from "./sideBarHeader";
import SideBarFooter from "./sideBarFooter";
import AboveSideBar from "./sideBarAbove";
const UserSideBar = () => {
  return (
    <Sidebar className="user-side-bar">
      <AboveSideBar />

      <SideBarHeader />
      <Menu iconShape="square">
        <Link to="/print" className="link-style">
          <MenuItem icon={<FaPrint />}>Dịch vụ in</MenuItem>
        </Link>
        <Link to="/balance" className="link-style">
          <MenuItem icon={<FaChartBar />}>Xem số trang in</MenuItem>
        </Link>
        <Link to="/history" className="link-style">
          <MenuItem icon={<FaHistory />}>Xem lịch sử in</MenuItem>
        </Link>
        <Link to="/history" className="link-style">
          <MenuItem icon={<FaBook />}>Tài liệu hướng dẫn</MenuItem>
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

export default UserSideBar;
