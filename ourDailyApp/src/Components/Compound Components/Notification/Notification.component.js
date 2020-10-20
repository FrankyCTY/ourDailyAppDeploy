import React from "react";
import S from "./styles/Notification.style";

export default function Notification({
  children,
  ...restProps
}) {
  return (
    <S.FloatContainer {...restProps}>
      <S.ErrorIcon className="iconfont icon-close" />
      <S.ErrorText>{children}</S.ErrorText>
    </S.FloatContainer>
  );
}