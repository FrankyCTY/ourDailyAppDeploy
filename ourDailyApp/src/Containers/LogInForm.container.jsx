import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../Components/Compound Components";

import useLogInForm from "../hooks/useLogInForm.hooks";
import { emailSignInStart } from "../redux/Auth/auth.actions";
import { changeAuthPage } from "../redux/AuthPage/AuthPage.actions";

import PixelSpinner from "../Components/Molecules/Spinners/PixelSpinner/PixelSpinner.component";

import { ReactComponent as UserSvg } from "../assets/svg/user.svg";
import { ReactComponent as LockSvg } from "../assets/svg/password.svg";
import { ReactComponent as AlertSvg } from "../assets/svg/alert.svg";

const LogInForm = () => {
  const {
    logInAlertObj,
    clickedAlertSvg,
    setClickedAlertSvg,
    logInDetails,
    handleInputChange,
  } = useLogInForm();

  const { email, password } = logInDetails;
  const dispatch = useDispatch();

  const isLoggingIn = useSelector(state => state.logInForm.isLoggingIn);

  return (
    <Form.LogInFormContainer>
      <Form.Group>
        <Form.InputSvg>
          <UserSvg />
        </Form.InputSvg>

        <Form.Input
          onChange={handleInputChange}
          type="email"
          value={email}
          name="email"
          className={`${email !== "" && "active"}`}
          hasSvgComponent={true}
        />
        <Form.Label hasSvgComponent={true} className="styled_label">
          Email
        </Form.Label>

        {logInAlertObj.emailAlerts.length > 0 &&
          !(clickedAlertSvg === "email") && (
            <Form.AlertSvg
              onClick={() => {
                setClickedAlertSvg("email");
              }}
            >
              <AlertSvg />
            </Form.AlertSvg>
          )}
        {clickedAlertSvg === "email" && (
          <Form.AlertTooltip
            className="top"
            setClickedAlertSvg={setClickedAlertSvg}
          >
            {logInAlertObj.emailAlerts.map((alertMsg) => `${alertMsg}${"\n"}`)}
          </Form.AlertTooltip>
        )}
      </Form.Group>

      <Form.Group className="mt-2">
        <Form.InputSvg>
          <LockSvg />
        </Form.InputSvg>

        <Form.Input
          onChange={handleInputChange}
          type="password"
          value={password}
          name="password"
          className={`${password !== "" && "active"}`}
          hasSvgComponent={true}
        />
        <Form.Label hasSvgComponent={true} className="styled_label">
          Password
        </Form.Label>

        {logInAlertObj.formAlerts.length > 0 &&
          !(clickedAlertSvg === "password") && (
            <Form.AlertSvg
              onClick={() => {
                setClickedAlertSvg("password");
              }}
            >
              <AlertSvg />
            </Form.AlertSvg>
          )}

        <Form.ForgotPassBtn
          to={"/auth/forgotPassword"}
          onClick={() => dispatch(changeAuthPage("forgotPassword"))}
        >
          Forgot Password?
        </Form.ForgotPassBtn>
        {clickedAlertSvg === "password" && (
          <Form.AlertTooltip
            className="top"
            setClickedAlertSvg={setClickedAlertSvg}
          >
            {logInAlertObj.formAlerts.map((alertMsg) => `${alertMsg}${"\n"}`)}
          </Form.AlertTooltip>
        )}
      </Form.Group>

      <Form.LogInBtn
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          dispatch(emailSignInStart(logInDetails));
        }}
        disabled={isLoggingIn}
      >
        Log In {isLoggingIn && <PixelSpinner size={1.2} animationDuration={1500} style={{marginLeft: "4px"}}/>}
      </Form.LogInBtn>
    </Form.LogInFormContainer>
  );
};

export default React.memo(LogInForm);
