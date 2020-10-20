import styled from "styled-components";
import Button from '@material-ui/core/Button';


const S = {};

S.Frame = styled.div`
width: 100vw;
height: 100vh;
display: grid;
place-items: center;
`;

S.Container = styled.div`
width: 100%;
height: 445px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

S.WarningIcon = styled.div`

    & i {
        font-size: 5rem;
        color: #f44336;

        @media screen and (min-width: 650px) {
            font-size: 7rem;
        }
    }
    @media screen and (min-width: 520px) {
        margin-right: 2rem;
    }

    
`;

S.BigText = styled.p`
    font-size: 2.8rem;
    color: #F8F8F8;

    @media screen and (min-width: 650px) {
        font-size: 3.4rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 4.5rem;
    }
`;

S.DescText = styled.p`
font-size: 1.5rem;
color: #F8F8F8;

`;

S.Group = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (min-width: 650px) {
    flex-direction: row;
}
`;

S.IconAndTextGroup = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 50%;
margin: 0 auto;
@media screen and (min-width: 520px) {
    flex-direction: row;
}
`;

S.ColGroup = styled.div``;

S.Button = styled(Button)`
    margin: .5rem !important;
    outline: 0 !important;

    @media screen and (min-width: 650px) {
        margin: 1rem !important;
    }
`;


export default S;