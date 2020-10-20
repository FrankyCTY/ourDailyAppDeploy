import styled from "styled-components";

const S = {};

// ============== Log in form wrapper ================

S.LogInFormWrapper = styled.div`
  flex-basis: 45%;
  width: 100%;
`;
// ============== Oauth wrapper ================
S.OauthBtnsWrapper = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 175px;
`;

export default S;
