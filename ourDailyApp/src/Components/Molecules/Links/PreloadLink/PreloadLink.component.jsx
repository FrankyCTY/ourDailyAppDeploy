import React from "react";
import { Link } from "react-router-dom";
import { preloadComponent } from "./PreloadLink.utils";

const PreloadLink = ({ to, ...otherProps }) => {
  return (
    <Link to={to} onMouseEnter={() => preloadComponent(to)} {...otherProps} />
  );
};

export default PreloadLink;
