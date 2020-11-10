import axios from "axios";

const API = 'http://localhost:5000/api/v1';

/**
 * A helper function to fetch data from your API.
 */
export async function fetchFromAPI(endpointURL, opts) {
  const res = await axios({
    method: "POST",
    url: `${API}/${endpointURL}`,
    data: {
      ...opts
    },
    withCredentials: true,
  });

  console.log({res})
  return res;
}