import axios from "axios";

export const getBackgroundImages = async(url) => {
    const apiResponse = await axios({
        method: "GET",
        url,
        headers: {
            Accept: 'application/json',
            Authorization: process.env.REACT_APP_PEXELS_API_KEY,
        }
    })

    return apiResponse;
}

