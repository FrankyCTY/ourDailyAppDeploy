import { store } from "../redux/store";

import { setSignUpAlert, setLogInAlert } from "../redux/Auth/auth.actions";

function globalErrHandler(err, target) {
  const { scope, message } = err.response.data.error;

  // 1) Depends on err.scope to determine -> globalError reducer || local alert
  if (scope === "global") {
  } else if (scope === "local") {
    switch (target) {
      case "signUpAlert":
        store.dispatch(setSignUpAlert(message));
        break;
      case "logInAlert":
        store.dispatch(setLogInAlert(message));
        break;
      default:
        console.log("Scope === local but not being handled!");
        break;
    }
  }
}

export default globalErrHandler;
