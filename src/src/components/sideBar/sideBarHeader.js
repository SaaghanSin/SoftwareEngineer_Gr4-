import logo from "../../assets/images/logoBK.png";
import "./SideBarHeader.css";
const SideBarHeader = () => {
  return (
    <div
      style={{
        padding: "24px",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 14,
        letterSpacing: "1px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        color: "black",
      }}
    >
      <img
        className="mybk"
        src={logo}
        alt="Logo"
        style={{
          marginRight: "5px",
          marginTop: "-15px",
          height: "35 px",
          width: "35px",
        }}
      />
      <span className="myname"> Vũ Lâm Hoàng Đại </span>
    </div>
  );
};

export default SideBarHeader;
