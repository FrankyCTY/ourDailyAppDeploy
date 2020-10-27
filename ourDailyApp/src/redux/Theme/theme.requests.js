import axios from "axios";

export async function setThemeInDb(theme, url) {
    const res = await axios({
        method: "PATCH",
        url,
        data: {
            theme,
        },
        withCredentials: true,
    })

    return res;
}