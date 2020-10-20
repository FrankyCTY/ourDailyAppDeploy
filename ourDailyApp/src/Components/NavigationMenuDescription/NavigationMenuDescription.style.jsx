import styled from "styled-components";

const S = {};

S.DescriptionWrapper = styled.div`
  width: 80%;
  max-width: 500px;
  text-align: center;
  align-self: center;

  @media screen and (min-width: 600px) {
    width: 35%;
  }
`;

S.TitleText = styled.h2`
  font-size: clamp(1.5rem, 3.5vw, 3.5rem);
  text-align: center;
`;

S.Text = styled.h3`
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  line-height: 1.5;
  text-align: center;
`;

export default S;
