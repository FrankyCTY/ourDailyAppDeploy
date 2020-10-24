import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";

import {SuccessFail, Form} from "../../Components/Compound Components";
import { ReactComponent as LockSvg } from "../../assets/svg/password.svg";
import {changeAuthPage} from "../../redux/AuthPage/AuthPage.actions";
import {resetPasswordStart, changeResetPasswordState} from "../../redux/User/user.actions";
import useRouter from "../../hooks/useRouter.hooks";

import PixelSpinner from "../../Components/Molecules/Spinners/PixelSpinner/PixelSpinner.component";


const ResetPasswordPage = () => {
    const dispatch = useDispatch();
    const resetPwState = useSelector(state => state.user.resetPwState);
    const isResettingPw = useSelector(state => state.user.isResettingPw);

    const router = useRouter();


    // for the bottom bar
    useEffect(() => {
        dispatch(changeAuthPage("signup"));
      }, [dispatch]);

    // reset password page state
    useEffect(() => {
        return () => {
            dispatch(changeResetPasswordState(""));
        }
    }, [dispatch])

      const [resetPwObj, setResetPwObj] = useState({newPassword: "", confirmPassword: ""});

      const {newPassword, confirmPassword} = resetPwObj;

      const handleChange = (e) => {
        const {name, value} = e.target;
        setResetPwObj({...resetPwObj, [name]: value});
      };
    
      const onSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPasswordStart(resetPwObj, router.pathName.substr(router.pathName.lastIndexOf('/') + 1)));
      }


    return (<>
    {resetPwState === "" && <Form className="h-48 md:h-64">
        <Form.Group style={{ width: "80%", maxWidth: "400px" }}>
          <Form.InputSvg>
            <LockSvg />
          </Form.InputSvg>

          <Form.Input
            onChange={handleChange}
            type="password"
            value={newPassword}
            name="newPassword"
            className={`${newPassword !== "" && "active"}`}
            hasSvgComponent={true}
          />
          <Form.Label hasSvgComponent={true} className="styled_label">
            New Password
          </Form.Label>
        </Form.Group>

        <Form.Group style={{ width: "80%", maxWidth: "400px" }}>
          <Form.InputSvg>
            <LockSvg />
          </Form.InputSvg>

          <Form.Input
            onChange={handleChange}
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            className={`${confirmPassword !== "" && "active"}`}
            hasSvgComponent={true}
          />
          <Form.Label hasSvgComponent={true} className="styled_label">
            Confirm Password
          </Form.Label>
        </Form.Group>

        <Form.SignUpBtn onClick={onSubmit} disabled={isResettingPw} className="mt-0">Send{isResettingPw && <PixelSpinner size={1.2} animationDuration={1500} style={{marginLeft: "4px"}}/>}</Form.SignUpBtn>
      </Form>}


    {resetPwState === "success" && <SuccessFail.SuccessContainer primaryText="Your password has been updated" />}
    {resetPwState === "fail" && <SuccessFail.FailContainer primaryText="Unauthorized Operation" />}
    
    </>)
}

export default ResetPasswordPage;
