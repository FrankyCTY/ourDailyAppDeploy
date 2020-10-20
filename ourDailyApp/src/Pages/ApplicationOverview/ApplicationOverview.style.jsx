import styled from "styled-components";

const S = {};

// =============== application overview + header ==================

S.ApplicationOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
`;

S.IconApp = styled.i`
  font-size: clamp(1.4rem, 3.5vw, 2.5rem);
  font-weight: 700;
  margin-left: 0.2em;
`;

// =============== App store content main ==================
S.ShopContentContainer = styled.div`
  width: 100vw;
`;

// ================ Card Section Container - for transition ======================

S.CardSectionContainer = styled.div`
  display: grid;
  width: 90%;
  max-width: 900px;

  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));

  gap: 40px;

  @media screen and (max-width: 1125px) {
    grid-template-columns: 450px;
    justify-content: center;
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: minmax(100px, 440px);
    justify-content: center;
  }
`;

export default S;
