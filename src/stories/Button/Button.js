import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, background, size, handleClick, color }) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    backgroundColor: background,
    color: color,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  };
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string, //label can be string
  background: PropTypes.string, //label can be string
  size: PropTypes.oneOf(["sm", "md", "lg"]), //Size Can be One Of These
  handleClick: PropTypes.func,
};
export default Button;
