import axios from "axios";

//userDetails: avatar: string, name: string, email: string, password: string
export const updateUserInfo = async(formData, imgName) => {
    let res;
    if(imgName) {
        res =  axios
        .patch(`${process.env.REACT_APP_URL}/users/updateMe`, imgName, {withCredentials: true})
        .then(res => res.data.data.user)
        .catch(err => console.error(err));
    }
    else {
        res =  axios
        .patch(`${process.env.REACT_APP_URL}/users/updateMe`, formData, {withCredentials: true})
        .then(res => res.data.data.user)
        .catch(err => console.error(err));
    }

    return res;
}

export const changeUserPassword = async(changePasswordDetails, url) => {

    const {password, newPassword, confirmNewPassword} = changePasswordDetails;

    const backEndResponse = await axios({
        method: "PATCH",
        url,
        data: {
            password,
            newPassword,
            confirmNewPassword
        },
        withCredentials: true,
      });
    
      return backEndResponse;
}

export const deleteMe = async(url) => {
    const backEndResponse = await axios({
        method: "PATCH",
        url,
        withCredentials: true,
      });
    
      return backEndResponse;
}

export const sendForgotPwEmail = async(email, url) => {
    const backEndResponse = await axios({
        method: "POST",
        url,
        data: {
            email,
        }
    });

    return backEndResponse;
}

export const resetPassword = async({newPassword, confirmPassword}, url) => {
    const backEndResponse = await axios({
        method: "PATCH",
        url,
        data: {
            newPassword,
            confirmPassword,
        }
    });

    return backEndResponse;
}

export const changeUserBackground = async(formData, url) => {
    let res;
    res =  await axios.patch(url, formData, {withCredentials: true});

    return res;
}

export const getUserBackground = async(url) => {
    let res;
    res =  await axios.get(url, {withCredentials: true});

    return res;
}