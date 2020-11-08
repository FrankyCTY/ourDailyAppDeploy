import styled from "styled-components";

const S = {};

S.Container = styled.div``;

S.SvgContainer = styled.div`
  & svg {
    margin: ${({svgmargin}) => svgmargin};
    width: ${({svgsize}) => svgsize};
  }
`; 

export default S;
