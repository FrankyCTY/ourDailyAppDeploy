

export const allocateSignUpAlerts = (tupleAlertArray) => {
  // @desc tupleAlertArray [:targetName, :alertMsg]

  let newSignUpAlert = {
    nameAlerts: [],
    emailAlerts: [],
    passwordAlerts: [],
    genderAlerts: [],
    birthdayAlerts: [],
  };

  // Loop through each alertTuple and distribute them into the corresponding
  // alert array
  tupleAlertArray.forEach((tupleAlert) => {
    switch (tupleAlert[0]) {
      case "name":
        newSignUpAlert.nameAlerts.push(tupleAlert[1]);
        break;
      case "email":
        newSignUpAlert.emailAlerts.push(tupleAlert[1]);
        break;
      case "password":
        newSignUpAlert.passwordAlerts.push(tupleAlert[1]);
        break;
      case "gender":
        newSignUpAlert.genderAlerts.push(tupleAlert[1]);
        break;
      case "birthday":
        newSignUpAlert.birthdayAlerts.push(tupleAlert[1]);
        break;
      default:
        break;
    }
  });
  return newSignUpAlert;
};

export const allocateLogInAlerts = (tupleAlertArray) => {
  // @desc tupleAlertArray [:targetName, :alertMsg]
  let newLogInAlert = {
    emailAlerts: [],
    formAlerts: [],
  };

  tupleAlertArray.forEach((tupleAlert) => {
    switch (tupleAlert[0]) {
      case "email":
        newLogInAlert.emailAlerts.push(tupleAlert[1]);
        break;
      case "form":
        newLogInAlert.formAlerts.push(tupleAlert[1]);
        break;
      default:
        break;
    }
  });

  return newLogInAlert;
};
