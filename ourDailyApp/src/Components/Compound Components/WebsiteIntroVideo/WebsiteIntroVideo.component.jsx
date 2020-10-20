import React from "react";
import S from "./styles/WebsiteIntroVideo.style";

export default function WebsiteIntroVideo({ children, ...otherProps }) {
  return <S.Background {...otherProps}>{children}</S.Background>;
}

WebsiteIntroVideo.Container = function ({ children, ...otherProps }) {
  return <S.Container {...otherProps}>{children}</S.Container>;
};

WebsiteIntroVideo.PreviewVideoFrame = function VideoFrame({
  children,
  ...otherProps
}) {
  return (
    <S.PreviewVideoFrame {...otherProps}>
      {children}
      <S.AnimateCircle delay={0} />
      <S.AnimateCircle delay={300} />
      <S.AnimateCircle delay={500} />
    </S.PreviewVideoFrame>
  );
};

WebsiteIntroVideo.PreviewVideoImg = function Video({
  children,
  ...otherProps
}) {
  return <S.PreviewVideoImg {...otherProps}>{children}</S.PreviewVideoImg>;
};

WebsiteIntroVideo.TextAndBtnWrapper = function TextAndBtnWrapper({
  children,
  ...otherProps
}) {
  return <S.TextAndBtnWrapper {...otherProps}>{children}</S.TextAndBtnWrapper>;
};

WebsiteIntroVideo.Title = function WebsiteIntroVideoTitle({
  children,
  ...otherProps
}) {
  return <S.Title {...otherProps}>{children}</S.Title>;
};

WebsiteIntroVideo.SignUpBtn = function SignUpBtn({ children, ...otherProps }) {
  return <S.SignUpBtn {...otherProps}>{children}</S.SignUpBtn>;
};
