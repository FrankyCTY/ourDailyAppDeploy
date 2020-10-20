import LogInFormActionTypes from "./logInForm.types";

export const setIsLoggingInTRUE = () => ({
  type: LogInFormActionTypes.SET_IS_LOGGINGIN_TRUE,
});

export const setIsLoggingInFALSE = () => ({
  type: LogInFormActionTypes.SET_IS_LOGGINGIN_FALSE,
});
