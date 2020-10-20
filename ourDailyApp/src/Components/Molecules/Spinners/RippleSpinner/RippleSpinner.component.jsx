import React from "react";
import S from "./RippleSpinner.style";

const RippleSpinner = () => {
  return (
    <S.SpinnerOverlay>
      <S.SpinnerContainer />
    </S.SpinnerOverlay>
  );
};

export default RippleSpinner;
