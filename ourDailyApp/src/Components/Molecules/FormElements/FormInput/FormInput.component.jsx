import React from "react";
import S from "./FormInput.style";

import { connect, useDispatch } from "react-redux";
import { setClickedAlertSvg } from "../../../../redux/signUpForm/signUpform.actions";

import AlertTooltip from "../../../Molecules/Tooltips/AlertTooltip/AlertTooltip.component";

import { ReactComponent as AlertSvg } from "../../../../assets/svg/alert.svg";

import PropTypes from "prop-types";

const FormInput = ({
  SvgComponent,
  placeholder,
  type,
  hasForgotPassBtn,
  handleInputChange,
  alerts,
  setClickedAlertSvg,
  place,
  hasAlertTooltip,
  from,
  ...otherProps
}) => {
  //@importedBy   LogInForm SignUpForm
  //@styledProps  Size / Position of label

  return (
    <S.FormInputBlock className={`${alerts.length > 0 ? "alert" : ""}`}>
      {SvgComponent !== undefined && <SvgComponent className="S_svg" />}
      <S.InputField
        aria-label={otherProps.name}
        type={type}
        onChange={handleInputChange}
        className={otherProps.value !== "" && "active"}
        styled_hasSvgComponent={SvgComponent}
        {...otherProps}
        required
      />
      <S.Label className="styled_label" styled_hasSvgComponent={SvgComponent}>
        {placeholder}
      </S.Label>
      {/* =================== Forgot Pass Btn =================== */}
      {hasForgotPassBtn && (
        <S.ForgotPassBtn type="button">Forgot Password?</S.ForgotPassBtn>
      )}
      {/* =================== Alerts =================== */}
      {alerts.length > 0 && !hasAlertTooltip && (
        <AlertSvg
          className="S_AlertSvg"
          onClick={() => {
            setClickedAlertSvg(otherProps.name);
          }}
        />
      )}
      {/* =================== Alert Tooltip =================== */}
      {hasAlertTooltip && (
        <AlertTooltip place={place} alerts={alerts} from={from} />
      )}
    </S.FormInputBlock>
  );
};

FormInput.propTypes = {
  SvgComponent: PropTypes.object,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hasForgotPassBtn: PropTypes.bool,
  hasAlertTooltip: PropTypes.bool,
  alerts: PropTypes.array,
  setClickedAlertSvg: PropTypes.func,
  place: PropTypes.string,
  otherProps: PropTypes.object,
};

FormInput.defaultProps = {
  SvgComponent: undefined,
  hasAlertTooltip: false,
  hasForgotPassBtn: false,
  place: "top",
  alerts: [],
  from: "signUpForm",
};

const mapDispatchToProps = (dispatch) => ({
  setClickedAlertSvg: (target) => dispatch(setClickedAlertSvg(target)),
});

export default connect(null, mapDispatchToProps)(FormInput);
