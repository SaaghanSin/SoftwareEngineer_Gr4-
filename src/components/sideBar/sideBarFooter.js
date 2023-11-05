import { FaGithub } from "react-icons/fa";

const SideBarFooter = () => {
  return (
    <div
      className="sidebar-footer-container"
      style={{
        position: "absolute",
        bottom: "20px", // Adjust the distance from the bottom as needed
        left: "50%",
        transform: "translateX(-50%)",
        textDecoration: "none",
        color: "black",
        border: "1px solid",
        borderRadius: "15px",
        width: "150px",
        height: "35px",
        paddingTop: "5px",
        backgroundColor: "white", // Add background color if needed
      }}
    >
      <a
        href="https://github.com/NguyenDuong163/SoftwareEngineer_Gr4"
        target="_blank"
        className="sidebar-btn"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "black" }}
      >
        <FaGithub />
        <span
          style={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          &nbsp; View Source
        </span>
      </a>
    </div>
  );
};

export default SideBarFooter;
