import React from "react";
import S from "./NavigationMenuDescription.style";

const NavigationMenuDescription = ({ hoverNavItem }) => {
  let descriptionTitle = "";
  let descriptionText = "";

  switch (hoverNavItem) {
    case "appstore":
      descriptionTitle = "App Store";
      descriptionText =
        "Have a look of my mini-applications and buy whatever your like!";
      break;
    case "linkedin":
      descriptionTitle = "LinkedIn";
      descriptionText = "Click to check my professional profile on LinkedIn";
      break;

    case "github":
      descriptionTitle = "Github";
      descriptionText = "Have a look at my other projects on Github";
      break;
    default:
      descriptionTitle = "Welcome";
      descriptionText = "Welcome to our website";
  }

  return (
    <S.DescriptionWrapper className="float-nav-content">
      <S.TitleText className="nav-content-title">
        {descriptionTitle}
      </S.TitleText>
      <S.Text className="nav-content-text">{descriptionText}</S.Text>
    </S.DescriptionWrapper>
  );
};

export default NavigationMenuDescription;
