import React from "react";
import { useDispatch } from "react-redux";
import { Form } from "../Components/Compound Components";
import PixelSpinner from "../Components/Molecules/Spinners/PixelSpinner/PixelSpinner.component";
import { signUpStart } from "../redux/Auth/auth.actions";

import useSignUpForm from "../hooks/useSignInForm.hooks";

import { ReactComponent as AlertSvg } from "../assets/svg/alert.svg";

const SignUpForm = () => {
  const {
    signUpAlertObj,
    clickedAlertSvg,
    setClickedAlertSvg,
    signUpDetails,
    handleInputChange,
    isSigningUp,
  } = useSignUpForm();
  const { name, email, password, passwordConfirm } = signUpDetails;

  const dispatch = useDispatch();

  return (
    <Form.SignUpFormContainer>
      <Form.Group>
        <Form.Input
          onChange={handleInputChange}
          type="text"
          value={name}
          name="name"
          className={`${name !== "" && "active"}`}
        />
        <Form.Label className="styled_label">Display Name</Form.Label>

        {signUpAlertObj.nameAlerts.length > 0 && !(clickedAlertSvg === "name") && (
          <Form.AlertSvg
            onClick={() => {
              setClickedAlertSvg("name");
            }}
          >
            <AlertSvg />
          </Form.AlertSvg>
        )}
        {clickedAlertSvg === "name" && (
          <Form.AlertTooltip
            className="top"
            setClickedAlertSvg={setClickedAlertSvg}
          >
            {signUpAlertObj.nameAlerts.map((alertMsg) => `${alertMsg}${"\n"}`)}
          </Form.AlertTooltip>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Input
          onChange={handleInputChange}
          type="email"
          value={email}
          name="email"
          className={`${name !== "" && "active"}`}
        />
        <Form.Label className="styled_label">Email</Form.Label>
        {signUpAlertObj.emailAlerts.length > 0 &&
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
            {signUpAlertObj.emailAlerts.map((alertMsg) => `${alertMsg}${"\n"}`)}
          </Form.AlertTooltip>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Input
          onChange={handleInputChange}
          type="password"
          value={password}
          name="password"
          className={`${password !== "" && "active"}`}
        />
        <Form.Label className="styled_label">Password</Form.Label>
        {signUpAlertObj.passwordAlerts.length > 0 &&
          !(clickedAlertSvg === "password") && (
            <Form.AlertSvg
              onClick={() => {
                setClickedAlertSvg("password");
              }}
            >
              <AlertSvg />
            </Form.AlertSvg>
          )}
        {clickedAlertSvg === "password" && (
          <Form.AlertTooltip
            className="top"
            setClickedAlertSvg={setClickedAlertSvg}
          >
            {signUpAlertObj.passwordAlerts.map(
              (alertMsg) => `${alertMsg}${"\n"}`
            )}
          </Form.AlertTooltip>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Input
          onChange={handleInputChange}
          type="password"
          value={passwordConfirm}
          name="passwordConfirm"
          className={`${passwordConfirm !== "" && "active"}`}
        />
        <Form.Label className="styled_label">Confirm password</Form.Label>
      </Form.Group>

      <Form.Group style={{ justifyContent: "space-between" }}>
        <Form.Block style={{ flexBasis: "35%" }}>
          <Form.Label>Gender</Form.Label>

          <Form.RadioInputGroup>
            <Form.RadioInput
              type="radio"
              value="Female"
              name="gender"
              onChange={handleInputChange}
              id="female"
              required
            ></Form.RadioInput>
            <Form.RadioLabel
              htmlFor="female"
              className="S_CustomSpan styled_female"
            >
              F
            </Form.RadioLabel>

            <Form.RadioInput
              type="radio"
              value="Male"
              name="gender"
              onChange={handleInputChange}
              id="male"
              required
            ></Form.RadioInput>
            <Form.RadioLabel
              htmlFor="male"
              className="S_CustomSpan styled_male"
            >
              M
            </Form.RadioLabel>
          </Form.RadioInputGroup>
        </Form.Block>

        <Form.Block style={{ flexBasis: "60%" }}>
          <Form.Label style={{ position: "initial" }}>Birthday</Form.Label>
          <Form.DatePickerInput
            type="date"
            name="birthday"
            onChange={handleInputChange}
            aria-label="birthday"
            required
          />
        </Form.Block>
      </Form.Group>

      <Form.SignUpBtn
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          dispatch(signUpStart(signUpDetails));
        }}
      >
        Sign Up
        {isSigningUp && <PixelSpinner size={1.2} animationDuration={1500} style={{transform: "translateY(2px)"}}/>}
      </Form.SignUpBtn>
    </Form.SignUpFormContainer>
  );
};

export default SignUpForm;
