import axios from "axios";

export const getBackgroundImages = async(url) => {
    const apiResponse = await axios({
        method: "GET",
        url,
        headers: {
            Accept: 'application/json',
            // Authorization: process.env.REACT_APP_PEXELS_API_KEY,
            Authorization: "563492ad6f917000010000015339853a5f064cc6bf41a926fd5f0a5b",
        }
    })

    return apiResponse;
}

