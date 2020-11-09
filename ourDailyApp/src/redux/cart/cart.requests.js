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
        withCredentials: true,
    })
    return res;
}

export const getCartApps = async() => {
    const res = await axios({
        method: "GET",
        url: `/api/v1/users/getAppInCart`,
        withCredentials: true,
    })
    return res;
}

export const getWishlistApps = async() => {
    const res = await axios({
        method: "GET",
        url: `/api/v1/users/getAppInWishlist`,
        withCredentials: true,
    })
    return res;
}

export const deleteAppFromCart = async(appId) => {
    const res = await axios({
        method: "DELETE",
        url: `/api/v1/applications/${appId}/deleteFromCart`,
        withCredentials: true,
    })

    return res;
}

export const deleteAppFromWishlist = async(appId) => {
    const res = await axios({
        method: "DELETE",
        url: `/api/v1/applications/${appId}/deleteFromWishlist`,
        withCredentials: true,
    })

    return res;
}

export const updateAllAppsInCart = async(appIds) => {
    const res = await axios({
        method: "POST",
        url: `/api/v1/applications/updateAppsInCart`,
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
        data: {
            appIds
        },
        withCredentials: true,
    })

    return res;
}