import { useState, useCallback } from "react";
import { useSelector } from "react-redux";

export default function useSignInForm() {
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    gender: null,
    birthday: null,
  });

  const [clickedAlertSvg, setClickedAlertSvg] = useState(null);

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setSignUpDetails((prevSignUpDetails) => ({
      ...prevSignUpDetails,
      [name]: value,
    }));
  }, []);

  const signUpAlertObj = useSelector((state) => state.auth.signUpAlert);

  const isSigningUp = useSelector((state) => state.signUpForm.isSigningUp);

  return {
    signUpAlertObj,
    clickedAlertSvg,
    setClickedAlertSvg,
    signUpDetails,
    handleInputChange,
    isSigningUp,
  };
}
