import { useState } from "react";
import "./button_mayin.css";
const Button_mayin = (props) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button
      className="button_mayin"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button_mayin;
