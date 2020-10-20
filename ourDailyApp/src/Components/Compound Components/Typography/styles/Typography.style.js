import styled from "styled-components";
import { fadeInAnimation } from "../../../../utils/styled/styleKeyframes";

const S = {};

S.SectionText = styled.p`
  color: rgba(256, 256, 256, 0.5);
  font-size: 0.9rem;
  line-height: 1.5rem;
  ${({ startAnimate }) => {
    return startAnimate && fadeInAnimation.fadeInStyle;
  }}
`;
S.sectionTitle = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;

  @media screen and (min-width: 550px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 1180px) {
    font-size: 2.5rem;
  }
  color: white;

  ${({ startAnimate }) => {
    return startAnimate && fadeInAnimation.fadeInStyle;
  }}
`;
S.sectionSubtitle = styled.h2`
  color: #6ca0fc;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.8rem;

  @media screen and (min-width: 1180px) {
    font-size: 1.5rem;
  }

  ${({ startAnimate }) => {
    return startAnimate && fadeInAnimation.fadeInStyle;
  }}
`;

export default S;
