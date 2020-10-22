import React from "react";
import S from "./styles/Notification.style";

export default function Notification({
  type,
  children,
  ...restProps
}) {
  return (
    <S.FloatContainer {...restProps}>
      {type === "error" && <S.ErrorIcon className="iconfont icon-close" />}
      {type === "success" && <S.SuccessIcon className="iconfont icon-success" />}
      <S.ErrorText>{children}</S.ErrorText>
    </S.FloatContainer>
  );
}