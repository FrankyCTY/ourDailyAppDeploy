import { store } from "../redux/store";

import { setSignUpAlert, setLogInAlert } from "../redux/Auth/auth.actions";
import { hideChangePasswordMsg, setChangePasswordAlert, showChangePasswordMsg, setSendForgotPwEmailAlert } from "../redux/User/user.actions";

import splitError from "./splitError";

function globalErrHandler(err, target) {
  const { scope, message } = err.response.data.error;
  // @desc Spliting alert string into array of [:targetName, :alertMsg]
  console.log({message});
  const tupleArray = splitError(message);
  console.log({tupleArray})

  // 1) Depends on err.scope to determine -> globalError reducer || local alert
  if (scope === "global") {
  } else if (scope === "local") {
    switch (target) {
      case "signUpAlert":
        store.dispatch(setSignUpAlert(tupleArray));
        break;
      case "logInAlert":
        store.dispatch(setLogInAlert(tupleArray));
        break;
      case "changePasswordAlert":
        // only get the first error message from the array
        store.dispatch(setChangePasswordAlert(tupleArray[0][1]));
        store.dispatch(showChangePasswordMsg());
        setTimeout(() => {
          store.dispatch(hideChangePasswordMsg());
        }, 2500);
        break;
      case "sendForgotPwAlert":
        store.dispatch(setSendForgotPwEmailAlert(tupleArray[0][1]));
        break;
      default:
        console.log("Scope === local but not being handled!");
        break;
    }
  }
}

export default globalErrHandler;
