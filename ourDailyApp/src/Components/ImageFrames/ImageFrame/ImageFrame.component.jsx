import React from "react";
import S from "./ImageFrame.style";

import PropTypes from "prop-types";

const ImageFrame = ({ children, size, hasHoverEffect, src, halo, withExtraText, ...restProps }) => {

  React.useEffect(() => {
    console.log("MOUNTED")
    return () => {
      console.log("Unmounted")
    }
  }, [])

  return (
    <React.Fragment>
      <S.ImageFrame styled_halo={halo} {...restProps} size={size}>
        <S.Img src={src} hasHoverEffect={hasHoverEffect}/>
        <S.EditProfileText className="styled_editProfileSpan">
          Edit Profile
        </S.EditProfileText>
      </S.ImageFrame>
      {withExtraText && <S.ExtraImgSpan>{children}</S.ExtraImgSpan>}
    </React.Fragment>
  );
};

ImageFrame.propTypes = {
  halo: PropTypes.bool,
  withExtraText: PropTypes.bool,
  size: PropTypes.string,
  hasHoverEffect: PropTypes.bool,
};

ImageFrame.defaultProps = {
  withExtraText: false,
  halo: false,
  size: "10em",
  hasHoverEffect: true,
};

export default ImageFrame;
