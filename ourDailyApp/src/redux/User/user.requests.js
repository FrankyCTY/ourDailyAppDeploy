import axios from "axios";

//userDetails: avatar: string, name: string, email: string, password: string
export const updateUserInfo = async(formData, imgName) => {
    let res;
    if(imgName) {
        res =  axios
        .patch("http://localhost:5000/api/v1/users/updateMe", imgName, {withCredentials: true})
        .then(res => res.data.data.user)
        .catch(err => console.error(err));
    }
    else {
        res =  axios
        .patch("http://localhost:5000/api/v1/users/updateMe", formData, {withCredentials: true})
        .then(res => res.data.data.user)
        .catch(err => console.error(err));
    }

    return res;
}