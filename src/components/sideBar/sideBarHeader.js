import logo from "../../assets/images/bk.png";
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
        src={logo}
        alt="Logo"
        style={{
          marginRight: "5px",
          marginTop: "-5px",
          height: "40px",
          width: "40px",
        }}
      />
      <span> Vũ Đại </span>
    </div>
  );
};

export default SideBarHeader;
