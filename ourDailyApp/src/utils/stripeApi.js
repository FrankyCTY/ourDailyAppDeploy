import axios from "axios";
import Url from "../url";

/**
 * A helper function to fetch data from your API.
 */
export async function fetchFromAPI(endpointURL, opts) {
  const res = await axios({
    method: "POST",
    url: `${Url}/${endpointURL}`,
    data: {
      ...opts
    },
    withCredentials: true,
  });

  console.log({res})
  return res;
}