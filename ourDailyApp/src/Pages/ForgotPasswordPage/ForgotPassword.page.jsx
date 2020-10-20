import React, { useState, useEffect } from "react";
import { Form } from "../..//Components/Compound Components";

import { useDispatch } from "react-redux";
import { changeAuthPage } from "../../redux/AuthPage/AuthPage.actions";

import { ReactComponent as UserSvg } from "../../assets/svg/user.svg";
import S from "./ForgotPassword.style";

function ForgotPasswordPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeAuthPage("signup"));
  }, [dispatch]);

  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(() => ({
      [email]: e.value,
    }));
  };

  return (
    <S.ForgotPasswordContainer>
      <Form>
        <Form.TextGroup>
          <Form.Title>Find Your Account</Form.Title>
          <Form.Text>
            Please enter your email address to search for your account.
          </Form.Text>
        </Form.TextGroup>
        <Form.Group style={{ width: "80%", maxWidth: "400px" }}>
          <Form.InputSvg>
            <UserSvg />
          </Form.InputSvg>

          <Form.Input
            onChange={handleEmailChange}
            type="email"
            value={email}
            name="email"
            className={`${email !== "" && "active"}`}
            hasSvgComponent={true}
          />
          <Form.Label hasSvgComponent={true} className="styled_label">
            Email
          </Form.Label>

          {/*  {logInAlertObj.emailAlerts.length > 0 && !(clickedAlertSvg === "email") && (
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
      )} */}
        </Form.Group>

        <Form.SignUpBtn style={{ marginTop: "2.5em" }}>Search</Form.SignUpBtn>
      </Form>
    </S.ForgotPasswordContainer>
  );
}

export default ForgotPasswordPage;
