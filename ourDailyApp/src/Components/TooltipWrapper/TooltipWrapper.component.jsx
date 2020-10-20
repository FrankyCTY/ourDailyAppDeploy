import React from "react";
import S from "./TooltipWrapper.style";

const TooltipWrapper = (props) => {
  return (
    <div className="TooltipWrapper">
      <button
        className={props.className}
        onClick={props.onClick}
        data-tip
        data-for={props.dataFor}
      >
        <span className="button-text">{props.children}</span>
      </button>

      {props.withToolTip && (
        <S.ToolTip
          arrowColor="#454e56"
          id={props.toolTipId}
          place={props.toolTipPlace}
          effect={props.toolTipEffect}
          className={props.toolTipClass}
        >
          {props.toolTipText}
        </S.ToolTip>
      )}
    </div>
  );
};

export default TooltipWrapper;
