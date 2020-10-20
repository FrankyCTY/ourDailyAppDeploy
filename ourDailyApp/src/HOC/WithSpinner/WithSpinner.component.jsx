import React from "./node_modules/react";
import { PixelSpinner } from "react-epic-spinners";

const WithSpinner = ({
  WrappedComponent,
  size,
  color,
  animationDuration,
  className,
  style,
}) => ({ isLoading }) => {
  return isLoading ? (
    <PixelSpinner
      size={size}
      color={color}
      animationDuration={animationDuration}
      style={style}
      pixelSize={pixelSize}
    ></PixelSpinner>
  ) : (
    <WrappedComponent />
  );
};

export default WithSpinner;
