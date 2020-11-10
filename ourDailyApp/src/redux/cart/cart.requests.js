import axios from "axios";
import Url from "../../url";

export const addAppToCartBackEnd = async (appId) => {
    const res = await axios({
        method: "PATCH",
        // url: `/api/v1/applications/${appId}/addToCart`,
        url: `${Url}/applications/${appId}/addToCart`,
        withCredentials: true,
    })
    return res;
}

export const addAppToWishlistBackEnd = async (appId) => {
    const res = await axios({
        method: "PATCH",
        // url: `/api/v1/applications/${appId}/addAppToWishlist`,
        url: `${Url}applications/${appId}/addAppToWishlist`,
        withCredentials: true,
    })
    return res;
}

export const getCartApps = async() => {
    const res = await axios({
        method: "GET",
        // url: `/api/v1/users/getAppInCart`,
        url: `${Url}/users/getAppInCart`,
        withCredentials: true,
    })
    return res;
}

export const getWishlistApps = async() => {
    const res = await axios({
        method: "GET",
        // url: `/api/v1/users/getAppInWishlist`,
        url: `${Url}/users/getAppInWishlist`,
        withCredentials: true,
    })
    return res;
}

export const deleteAppFromCart = async(appId) => {
    const res = await axios({
        method: "DELETE",
        // url: `/api/v1/applications/${appId}/deleteFromCart`,
        url: `${Url}/applications/${appId}/deleteFromCart`,
        withCredentials: true,
    })

    return res;
}

export const deleteAppFromWishlist = async(appId) => {
    const res = await axios({
        method: "DELETE",
        // url: `/api/v1/applications/${appId}/deleteFromWishlist`,
        url: `${Url}/applications/${appId}/deleteFromWishlist`,
        withCredentials: true,
    })

    return res;
}

export const updateAllAppsInCart = async(appIds) => {
    const res = await axios({
        method: "POST",
        // url: `/api/v1/applications/updateAppsInCart`,
        url: `${Url}/applications/updateAppsInCart`,
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
        // url: `/api/v1/applications/updateAppsInWishlist`,
        url: `${Url}/applications/updateAppsInWishlist`,
        data: {
            appIds
        },
        withCredentials: true,
    })

    return res;
}