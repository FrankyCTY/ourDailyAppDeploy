import React from "react";
import S from "./styles/Decoration.style";
import PropTypes from "prop-types";

export default function Decoration({ children, ...otherProps }) {
  return <S.Container {...otherProps}>{children}</S.Container>;
}

Decoration.DividerDivSkew = function DividerDivSkew({ ...otherProps }) {
  return <S.DividerDivSkew {...otherProps} />;
};

Decoration.EditorialDivider = function EditorialDivider({
  bottomWaveColor,
  ...otherProps
}) {
  return (
    <S.EditorialDividerSvg
      className="editorial"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28 "
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 
            58-18 88-18s
            58 18 88 18 
            58-18 88-18 
            58 18 88 18
            v44h-352z"
        />
      </defs>
      <g className="parallax1">
        <use href="#gentle-wave" x="50" y="3" fill="#f461c1" />
      </g>
      <g className="parallax2">
        <use href="#gentle-wave" x="50" y="0" fill="#4579e2" />
      </g>
      <g className="parallax3">
        <use href="#gentle-wave" x="50" y="9" fill="#3461c1" />
      </g>
      <g className="parallax4">
        <use href="#gentle-wave" x="50" y="6" fill={bottomWaveColor} />
      </g>
    </S.EditorialDividerSvg>
  );
};

Decoration.DividerDivSkew.propTypes = {
  firstColor: PropTypes.string.isRequired,
  secodColor: PropTypes.string.isRequired,
};

Decoration.EditorialDivider.prototype = {
  bottomWaveColor: PropTypes.string.isRequired,
};
