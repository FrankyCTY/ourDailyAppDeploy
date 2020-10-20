import React, { useEffect, useRef } from "react";
import S from "./AlertTooltip.style";

import useDismiss from "../../../../hooks/useDismiss.hooks";

import { connect } from "react-redux";
import { setClickedAlertSvg } from "../../../../redux/signUpForm/signUpform.actions";

const AlertTooltip = ({ alerts, place, setClickedAlertSvg, from }) => {
  const node = useRef();
  const action = setClickedAlertSvg;
  const dismissAlertTooltip = useDismiss(node, action);
  useEffect(() => {
    // add eventListener to document when mounted
    document.addEventListener("mousedown", dismissAlertTooltip);
    // remove eventListener from document when unmounted
    return () => {
      document.removeEventListener("mousedown", dismissAlertTooltip);
    };
  }, [dismissAlertTooltip]);

  // place: indicate the direction of the tooltip [top | right]
  return (
    <S.AlertTooltip className={place} ref={node}>
      {alerts.map((alertMsg) => `${alertMsg}${"\n"}`)}
    </S.AlertTooltip>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setClickedAlertSvg: (target) => dispatch(setClickedAlertSvg(target)),
});

export default connect(null, mapDispatchToProps)(AlertTooltip);
