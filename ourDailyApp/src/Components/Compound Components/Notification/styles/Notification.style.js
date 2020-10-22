import styled, {css} from "styled-components";


const iconStyles = css`
font-size: 1rem;
vertical-align: middle;
margin-right: .5rem;

@media screen and (min-width: 768px) {
    font-size: 1.4rem;
}`;

const S = {};

S.FloatContainer = styled.div`
opacity: 0;
pointer-event: none; 
position: fixed;
bottom: 4%;
left: 50%;
transform: translateX(-50%);
padding: 1rem 2rem;
background: ${({theme}) => theme.Notification.floatContainer_bg};
box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
z-index: 20;

transition: all 250ms ease-in-out;

&.show {
    opacity: 1;
    pointer-event: initial; 
}
`;

S.ErrorIcon = styled.span`
    color: ${({theme}) => theme.Notification.errorIcon};
    ${iconStyles}
`;

S.SuccessIcon = styled.span`
    color: ${({theme}) => theme.Notification.successIcon};
    ${iconStyles}
`;

S.ErrorText = styled.span`
    color: ${({theme}) => theme.Notification.errorText};
    white-space: nowrap;
    font-size: .5rem;
    vertical-align: middle;

    @media screen and (min-width: 375px) {
        font-size: .6rem;
    }
    @media screen and (min-width: 768px) {
        font-size: .9rem;
    }
`;

export default S;