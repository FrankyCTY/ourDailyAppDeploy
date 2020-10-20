import React from "react";
import S from "./SocialContactPair.style";

const SocialContactPair = ({ SvgComponent, children, link }) => {
  return (
    <S.SocialContactPair href={link}>
      <SvgComponent className="styled-svg" />
      {children}
    </S.SocialContactPair>
  );
};

export default SocialContactPair;
