import styled from "styled-components";

const S = {};

S.WholePageLoaderContainer = styled.div`
width: 100%;
height: 100%;
background: ${({theme}) => theme.WholePageLoader.bg};
display: grid;
place-items: center;
user-select: none;
color: ${({theme}) => theme.WholePageLoader.color};
`;

S.BigText = styled.p`
    font-size: 1rem;
    @media screen and (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

S.Group = styled.div`
text-align: center;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 10%;
`;

export default S;