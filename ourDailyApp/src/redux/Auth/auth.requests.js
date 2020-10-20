import axios from "axios";

// @response - user, image (avatarBuffer obj)
export const signUpUser = async (signUpDetails) => {
  const res = await axios({
    method: "POST",
    url: `${process.env.REACT_APP_URL}/users/signup`,
    data: {
      ...signUpDetails,
    },
    withCredentials: true,
  })

  return res;
};

export const logInUser = async (logInDetails) => {
  const res = await axios.post(
    `${process.env.REACT_APP_URL}/users/login`,
    {
      ...logInDetails,
    },
    {withCredentials: true},
  );
  return res;
};

export const checkAuthInfoFromDB = async (authorizeServerRes, url) => {
  const backEndResponse = await axios({
    method: "POST",
    url,
    data: {
      tokenId: authorizeServerRes.tokenId,
    },
    withCredentials: true,
  });

  return backEndResponse;
};

export const getAvatar = async (photoName) => {
  const backEndResponse = await axios({
    method: "GET",
    url: `${process.env.REACT_APP_URL}/users/images/${photoName}`,
    withCredentials: true,
  })

  return backEndResponse;
}

export const signOutAndCleanCookie = async () => {
  await axios({
    method: "GET",
    url: `${process.env.REACT_APP_URL}/users/logout`,
    withCredentials: true,
  })
}
