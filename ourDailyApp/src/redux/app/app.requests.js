import axios from "axios";

export const getAllApplications = async() => {
    const res = await axios({
        method: "GET",
        url: `/api/v1/applications`,
        // url: `${process.env.REACT_APP_URL}/applications`,
    })

    return res;
}