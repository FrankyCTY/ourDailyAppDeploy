import axios from "axios";

// @response - user, image (avatarBuffer obj)
export const signUpUser = async (signUpDetails) => {
  const res = await axios({
    method: "POST",
    url: `/api/v1/users/signup`,
    // url: `${process.env.REACT_APP_URL}users/signup`,
    data: {
      ...signUpDetails,
    },
    withCredentials: true,
  })

  return res;
};

export const logInUser = async ([logInDetails, url]) => {
  const res = await axios.post(
    url,
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
  console.log({backEndResponse})
  return backEndResponse;
};

export const getAvatar = async (photoName) => {
  const backEndResponse = await axios({
    method: "GET",
    // url: `/api/v1/users/images/${photoName}`,
    url: `${process.env.REACT_APP_URL}/users/images/${photoName}`,
    withCredentials: true,
  })

  return backEndResponse;
}

export const signOutAndCleanCookie = async () => {
  await axios({
    method: "GET",
    // url: `/api/v1/users/logout`,
    url: `${process.env.REACT_APP_URL}/users/logout`,
    withCredentials: true,
  })
}
