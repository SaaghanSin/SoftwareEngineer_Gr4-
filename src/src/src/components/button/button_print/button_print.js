import { useState } from "react";
import "./button_print.css";
const Button_print = (props) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button
      className="button_print"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button_print;
