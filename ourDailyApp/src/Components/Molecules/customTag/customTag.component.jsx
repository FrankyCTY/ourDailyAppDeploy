import React from "react";
import S from "./customTag.style";

const CustomTag = ({ tagContent, children }) => (
  <S.CustomTagWrapper tagContent={tagContent} className="custom-tag">
    {children}
  </S.CustomTagWrapper>
);

export default CustomTag;
