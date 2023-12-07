import { useState } from "react";

const MyButton = (props) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.style,
        ...(hovered && styles.hoverStyle),
        ...props.style,
        width: "100px", // Subtract padding from total width
      }}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

const styles = {
  style: {
    height: "53px",
    color: "white",
    backgroundColor: "#0C0B3B",
    border: "none",
    outline: "none",
    borderRadius: "8px",
    fontFamily: "VisbyRoundCF-DemiBold",
    cursor: "pointer",
    transition: "all .44s ease",
    WebkitTransition: "all .44s ease",
    MozTransition: "all .44s ease",
    padding: "0px 18px", // Add left and right padding
    borderRadius: "10px",
  },
  hoverStyle: { filter: "brightness(145%)" },
};

export default MyButton;
