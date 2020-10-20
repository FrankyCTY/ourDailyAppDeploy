import { useState } from "react";
import { useSelector } from "react-redux";

export default function useLogInForm() {
  const [logInDetails, setLogInDetails] = useState({ email: "", password: "" });
  const [clickedAlertSvg, setClickedAlertSvg] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLogInDetails((prevLogInDetails) => ({
      ...prevLogInDetails,
      [name]: value,
    }));
  };
  const logInAlertObj = useSelector((state) => state.auth.logInAlert);

  return {
    logInAlertObj,
    clickedAlertSvg,
    setClickedAlertSvg,
    logInDetails,
    handleInputChange,
  };
}
