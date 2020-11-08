import React from "react";
import S from "./styles/General.styles";

export default function General({ children, ...restProps }) {
  return <S.Container {...restProps}>{children}</S.Container>;
}

General.Svg = function Svg({
  svgSize, svgMargin, children, itemId, ...restProps
}) {
  const dispatch = useDispatch();

  const onBinSvgClick = () => {
    dispatch(setRenderTodoPopup("deleteTodoItem"));
    dispatch(toggleTodoPopupOpen());
  }

  return <S.SvgContainer onClick={onBinSvgClick} svgsize={svgSize || "0.8rem"} 
  svgmargin={svgMargin || "0.1rem 0.2rem"} {...restProps}>{children}</S.SvgContainer>
}