import axios from "axios";
import Url from "../../url";

export const getAllApplications = async() => {
    const res = await axios({
        method: "GET",
        // url: `/api/v1/applications`,
        url: `${Url}/applications`,
    })

    return res;
}