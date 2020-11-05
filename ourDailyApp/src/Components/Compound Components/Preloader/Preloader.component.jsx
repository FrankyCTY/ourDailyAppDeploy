import React from "react";
import S from "./styles/Preloader.style";

function Preloader({children, ...restProps}) {
  return <S.Preloader {...restProps}>{children}</S.Preloader>
}

Preloader.PreloaderRow = function PreloaderRow({children, ...restProps}) {
  return <S.PreloaderRow {...restProps}>{children}</S.PreloaderRow>
}

export default Preloader;