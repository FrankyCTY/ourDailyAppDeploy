import styled from "styled-components";

const S = {};

S.LogInPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  max-width: 500px;
`;

// ============== Oauth wrapper ================
S.OauthBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (orientation: landscape) {
    margin-bottom: 2rem;
  }

  // min-width: 175px;
`;

export default S;
