import { useState } from "react";
import "./button_login.css";
const Button_login = (props) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button
      className="button_login"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button_login;
