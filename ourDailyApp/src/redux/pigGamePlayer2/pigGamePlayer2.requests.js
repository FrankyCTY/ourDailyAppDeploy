import axios from "axios";

export const logInPLayer2 = async ([logInDetails, url]) => {
  const res = await axios.post(
    url,
    {
      ...logInDetails,
    },
    {withCredentials: true},
  );
  return res;
};