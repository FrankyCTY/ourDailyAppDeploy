import React from "react";
import PropTypes from "prop-types";

import S from "./ClassicSpinner.style";

const defaultProps = {
    innerColor: "gray",
    animationDuration: 800,
}

const ClassicSpinner = ({innerColor, animationDuration}) => <S.ClassicLoader innerColor={innerColor} animationDuration={animationDuration}
></S.ClassicLoader>

const propTypes = {
    innerColor: PropTypes.string,
    animationDuration: PropTypes.number,
};

ClassicSpinner.propTypes = propTypes;
ClassicSpinner.defaultProps = defaultProps;

export default ClassicSpinner;