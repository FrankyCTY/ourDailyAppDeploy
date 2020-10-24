const FormikUtils = {};

FormikUtils.SubmitProfileLogic = (formDetails, formData, cropData, file) => {

    const {name, email, bio, personalWebsite, gender, birthday} = formDetails;

    // Combine the edited avatar file with the update user details
    // into formData and send back to bkEnd
    //    const newBirthday = format(new Date(birthday), 'dd/MM/yyyy');

    // Update avatar only if user changed it, don't override with undefined
    if(cropData) {
        formData.append('avatar', file);
        console.log("we have cropped data");
    }
    formData.append('name', name);
    formData.append('email', email);
    formData.append('bio', bio);
    formData.append('personalWebsite', personalWebsite);
    formData.append('gender', gender);
    //    formData.append('birthday', newBirthday);
    formData.append('birthday', birthday);

    return formData;
}

export default FormikUtils;