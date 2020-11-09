import axios from "axios";

export const addAppToCartBackEnd = async (appId) => {
    const res = await axios({
        method: "PATCH",
        url: `/api/v1/applications/${appId}/addToCart`,
        withCredentials: true,
    })
    return res;
}

export const addAppToWishlistBackEnd = async (appId) => {
    const res = await axios({
        method: "PATCH",
        url: `/api/v1/applications/${appId}/addAppToWishlist`,
        // url: `${process.env.REACT_APP_URL}applications/${appId}/addAppToWishlist`,
        withCredentials: true,
    })
    return res;
}

export const getCartApps = async() => {
    const res = await axios({
        method: "GET",
        url: `/api/v1/users/getAppInCart`,
        // url: `${process.env.REACT_APP_URL}/users/getAppInCart`,
        withCredentials: true,
    })
    return res;
}

export const getWishlistApps = async() => {
    const res = await axios({
        method: "GET",
        url: `/api/v1/users/getAppInWishlist`,
        // url: `${process.env.REACT_APP_URL}/users/getAppInWishlist`,
        withCredentials: true,
    })
    return res;
}

export const deleteAppFromCart = async(appId) => {
    const res = await axios({
        method: "DELETE",
        url: `/api/v1/applications/${appId}/deleteFromCart`,
        // url: `${process.env.REACT_APP_URL}/applications/${appId}/deleteFromCart`,
        withCredentials: true,
    })

    return res;
}

export const deleteAppFromWishlist = async(appId) => {
    const res = await axios({
        method: "DELETE",
        url: `/api/v1/applications/${appId}/deleteFromWishlist`,
        // url: `${process.env.REACT_APP_URL}/applications/${appId}/deleteFromWishlist`,
        withCredentials: true,
    })

    return res;
}

export const updateAllAppsInCart = async(appIds) => {
    const res = await axios({
        method: "POST",
        url: `/api/v1/applications/updateAppsInCart`,
        // url: `${process.env.REACT_APP_URL}/applications/updateAppsInCart`,
        data: {
            appIds
        },
        withCredentials: true,
    })

    return res;
}

export const updateAllAppsInWishlist = async(appIds) => {
    const res = await axios({
        method: "POST",
        url: `/api/v1/applications/updateAppsInWishlist`,
        // url: `${process.env.REACT_APP_URL}/applications/updateAppsInWishlist`,
        data: {
            appIds
        },
        withCredentials: true,
    })

    return res;
}