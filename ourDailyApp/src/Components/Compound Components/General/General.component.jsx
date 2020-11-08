import React from "react";
import S from "./styles/General.styles";

export default function General({ children, ...restProps }) {
  return <S.Container {...restProps}>{children}</S.Container>;
}

General.Svg = function Svg({
  svgSize, svgMargin, children, itemId, ...restProps
}) {

  return <S.SvgContainer svgsize={svgSize || "0.8rem"} 
  svgmargin={svgMargin || "0.1rem 0.2rem"} {...restProps}>{children}</S.SvgContainer>
}