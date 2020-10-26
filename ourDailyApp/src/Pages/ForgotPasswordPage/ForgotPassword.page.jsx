import React, { useState, useEffect } from "react";
import { Form, SuccessFail } from "../..//Components/Compound Components";

import { useDispatch, useSelector } from "react-redux";
import { changeAuthPage } from "../../redux/AuthPage/AuthPage.actions";
import userActions from "../../redux/User/user.actions";
import PixelSpinner from "../../Components/Molecules/Spinners/PixelSpinner/PixelSpinner.component";
import { ReactComponent as AlertSvg } from "../../assets/svg/alert.svg";


import { ReactComponent as UserSvg } from "../../assets/svg/user.svg";
import S from "./ForgotPassword.style";

function ForgotPasswordPage() {
  const isSendingForgotPwEmail = useSelector(state => state.user.isSendingForgotPwEmail);
  const sendForgotPwAlert = useSelector(state => state.user.sendForgotPwAlert);
  const isForgotPwEmailSent = useSelector(state => state.user.isForgotPwEmailSent);
  const dispatch = useDispatch();

  const [clickedAlertSvg, setClickedAlertSvg] = useState(null);

  useEffect(() => {
    dispatch(changeAuthPage("signup"));
  }, [dispatch]);

  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(userActions.sendForgotPwEmailStart(email));
    console.log("OH!")
  }

  return (
    <>
    {isForgotPwEmailSent ? <SuccessFail.SuccessContainer primaryText="Email sent to" secondaryText={`${email}`}/> :
    <S.ForgotPasswordContainer>
      <Form>
        <Form.TextGroup>
          <Form.Title>Please enter your email</Form.Title>
          <Form.Text>
            We will send you an email to reset your password.
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

          {sendForgotPwAlert !== "" &&
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
            {sendForgotPwAlert}
          </Form.AlertTooltip>
        )}
        </Form.Group>

        <Form.SignUpBtn onClick={onSubmit} disabled={isSendingForgotPwEmail} style={{ marginTop: "2.5em" }}>Send{isSendingForgotPwEmail && <PixelSpinner size={1.2} animationDuration={1500} style={{marginLeft: "4px"}}/>}</Form.SignUpBtn>
      </Form>
    </S.ForgotPasswordContainer>
    }
    </>
  );
}

export default ForgotPasswordPage;

// function SendEmailSuccessPage({email}) {
//   return (
//     <>
//       <SuccessFail.SuccessContainer></SuccessFail.SuccessContainer>
//       <span className="iconfont icon-success text-6xl text-gray-200 sm:my-6"></span>
//       <div style={{maxWidth: "90%"}}>
//         <p className="text-gray-200 md:text-xl lg:text-2xl text-center">Email sent to</p>
//         <p className="text-gray-200 text-xs md:text-lg lg:text-lg text-center break-words">frankychantssssssakyu@yahoo.com.hk{email}</p>
//       </div>
//     </>
//   )
// }
