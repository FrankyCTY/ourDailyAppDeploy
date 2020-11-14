import styled from "styled-components";

const S = {};

S.FloatBarContainer = styled.div`
position: ${({position}) => `${position}`};;
${({direction}) => `${direction}: 0;`};
width: 100vw;
background: rgba(0, 0, 0, 0.7);
padding: 0 4%;
z-index: 50;
`;

export default S;