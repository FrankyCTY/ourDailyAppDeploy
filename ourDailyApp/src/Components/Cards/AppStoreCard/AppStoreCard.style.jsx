import styled, { keyframes } from "styled-components";
import { rgba } from "polished";

const S = {};

const cardPopsUp = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

S.AppStoreCardWrapper = styled.div`
  animation: ${cardPopsUp} 300ms ease-in-out forwards;
  max-width: 400px;
  &:hover .card-app {
    transform: translateY(-10px);
  }
`;

S.CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 30px;
  align-items: center;
  background-color: ${(props) => props.theme.appStoreCard.cardBg};
  width: 100%;
  height: 100%;
  cursor: pointer;

  box-shadow: 0px 4px 8px ${rgba("#000000", 0.12)};

  transition: transform 0.5s;
`;

// ========================= Image ============================

S.ImgWrapper = styled.div`
  width: 90%;
  height: 200px;
`;

// ========================= Text ============================
S.TitleText = styled.h3`
  margin: 20px 0;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  font-weight: 700;
  color: ${(props) => props.theme.appStoreCard.cardText};
`;

S.DescriptionText = styled.h5`
  color: ${(props) => props.theme.appStoreCard.cardText};
  font-size: clamp(0.8rem, 1.1vw, 1.1rem);
  margin-bottom: 20px;
`;

S.BtnStart = styled.button`
  border: 0;
  background: ${(props) => props.theme.appStoreCard.cardStartBtn_bg};
  border-radius: 3px;
  color: white !important;
  font-weight: 700;
  padding: 0.5em 5em;

  font-size: clamp(0.8rem, 1.6vw, 1rem);

  transition: transform 0.5s;

  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px ${rgba("#000000", 0.12)};
  }
`;

export default S;
