import styled from "styled-components";

const S = {};

S.FloatContainer = styled.div`
position: fixed;
bottom: 4%;
left: 50%;
transform: translateX(-50%);
padding: 1rem 2rem;
background: ${({theme}) => theme.Notification.floatContainer_bg};
box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
`;

S.ErrorIcon = styled.span`
    color: ${({theme}) => theme.Notification.errorIcon};
    font-size: 1.4rem;
    vertical-align: middle;
    margin-right: .5rem;
    `;

S.ErrorText = styled.span`
    color: ${({theme}) => theme.Notification.errorText};
`;

export default S;