import React from "react";

const Loader = ({ SpinnerComponent, children, isLoading, ...otherProps }) => {
  return isLoading ? <SpinnerComponent /> : children();
};

export default Loader;
