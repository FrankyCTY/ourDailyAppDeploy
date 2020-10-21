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

export const changeUserPassword = async(changePasswordObj, url) => {

    const {password, newPassword, confirmNewPassword} = changePasswordObj;

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