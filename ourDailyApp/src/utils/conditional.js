export const renderProfilePicture = (photoURL) => {
  // User logged in
  // IF user has setted the picture
  return photoURL !== null
    ? photoURL
    : // Otherwise we provide him a default picture
      "/images/assets/userProfilePictures/default.png";

  // User hasn't logged in
  // else {
  //   return null;
  // }
};
