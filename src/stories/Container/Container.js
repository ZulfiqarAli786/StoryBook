import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";

import "./container.scss";

const Container = ({ width, height, border, shadow, bg, size }) => {
  const containerStyle = {
    width: width,
    height: height,
    border: border ? "1px solid #eee" : "none",
    boxShadow: shadow ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : "none",
    backgroundColor: bg,
  };
  return <div className={size} style={containerStyle}></div>;
};

Container.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  bg: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  border: PropTypes.bool,
  shadow: PropTypes.bool,
};

export default Container;
