import axios from "axios";

export const getGameState = async(url) => {
    const res = await axios({
        method: "GET",
        url,
        withCredentials: true,
    })
    console.log({res})
    return res;
}

export const saveGameState = async([newGameState, url]) => {
    const res = await axios({
        method: "patch",
        url,
        data: {
          newGameState,
        },
        withCredentials: true,
    })
    console.log({res})
    return res;
}
