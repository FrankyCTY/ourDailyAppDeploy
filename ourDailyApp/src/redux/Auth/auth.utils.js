export const allocateSignUpAlerts = (alertArray) => {
  // @desc Spliting alert string into array of [:targetName, :alertMsg]
  const tupleArray = alertArray.map((alert) => alert.split("{SEPERATE}"));

  let newSignUpAlert = {
    nameAlerts: [],
    emailAlerts: [],
    passwordAlerts: [],
    genderAlerts: [],
    birthdayAlerts: [],
  };

  // Loop through each alertTuple and distribute them into the corresponding
  // alert array
  tupleArray.forEach((alertTuple) => {
    switch (alertTuple[0]) {
      case "name":
        newSignUpAlert.nameAlerts.push(alertTuple[1]);
        break;
      case "email":
        newSignUpAlert.emailAlerts.push(alertTuple[1]);
        break;
      case "password":
        newSignUpAlert.passwordAlerts.push(alertTuple[1]);
        break;
      case "gender":
        newSignUpAlert.genderAlerts.push(alertTuple[1]);
        break;
      case "birthday":
        newSignUpAlert.birthdayAlerts.push(alertTuple[1]);
        break;
      default:
        break;
    }
  });

  return newSignUpAlert;
};

export const allocateLogInAlerts = (alertArray) => {
  // @desc Spliting alert string into array of [:targetName, :alertMsg]
  const tupleArray = alertArray.map((alert) => alert.split("{SEPERATE}"));

  let newLogInAlert = {
    emailAlerts: [],
    formAlerts: [],
  };

  tupleArray.forEach((alertTuple) => {
    switch (alertTuple[0]) {
      case "email":
        newLogInAlert.emailAlerts.push(alertTuple[1]);
        break;
      case "form":
        newLogInAlert.formAlerts.push(alertTuple[1]);
        break;
      default:
        break;
    }
  });

  return newLogInAlert;
};
