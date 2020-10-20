import React from "react";
import PropTypes from "prop-types";

import S from "./PixelSpinner.style";

const defaultProps = {
  size: 70,
  color: "#fff",
  animationDuration: 1500,
  className: "",
};

const PixelSpinner = ({
  size,
  color,
  animationDuration,
  className,
  style,
  ...props
}) => {
  const pixelSize = size / 7;

  return (
    <S.Pixels
      size={size}
      color={color}
      animationDuration={animationDuration}
      className={`pixel-spinner${className ? " " + className : ""}`}
      style={style}
      pixelSize={pixelSize}
      {...props}
    >
      <div className="pixel-spinner-inner" />
    </S.Pixels>
  );
};

const propTypes = {
  size: PropTypes.number,
  animationDuration: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

PixelSpinner.propTypes = propTypes;
PixelSpinner.defaultProps = defaultProps;

export default PixelSpinner;
