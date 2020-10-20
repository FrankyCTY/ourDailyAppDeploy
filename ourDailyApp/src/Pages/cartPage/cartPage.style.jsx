import styled from "styled-components";

const S = {};

S.CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// =============== content main ==================
S.ContentContainer = styled.div`
  width: 90%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    width: 75%;
    flex-direction: row;
  }
`;

export default S;
