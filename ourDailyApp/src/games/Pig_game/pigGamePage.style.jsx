import styled, { css, keyframes } from "styled-components";

const S = {};

// =============== CSS ================
const panelStyles = css`
  position: relative;
  height: 100%;
  width: 50%;
  padding: 5% 0;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  touch-action: manipulation;

  background: ${(props) => props.theme.pigGamePage.panel_bg};

  &.active {
    background: ${(props) => props.theme.pigGamePage.activePanel_bg};
  }

  &.active .player-name {
    &:after {
      content: "";
      display: block;
      position: absolute;
      right: -20%;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 100%;

      font-size: clamp(1.2rem, 2vw, 2rem);
      --size: 0.4em;
      width: var(--size);
      height: var(--size);
      background: ${(props) => props.theme.pigGamePage.dot_color};
    }
  }
`;

const btnStyles = css`
  border: 0;
  background: 0;
  position: absolute;
  left: 50%;
  &:hover {
    color: red;
  }
`;

const signInOutBtnStyles = css`
  font-size: clamp(0.8rem, 1vw, 1rem);
  background: ${(props) => props.theme.pigGamePage.playerLogInBtn_primary};

  padding: 0.3em 0.6em;
  color: ${(props) => props.theme.pigGamePage.PlayerLogInBtn_secondary};
  border: 1px solid
    ${(props) => props.theme.pigGamePage.PlayerLogInBtn_secondary};
  border-radius: 20px;

  margin-right: 0.5em;
`;

const strikesStyles = css`
  font-size: clamp(0.8rem, 1.5vw, 1.5rem);
  position: absolute;
  font-family: "Press Start 2P", cursive;
`;

const strikeAnimation = (rotateDeg) => keyframes`
  from {
    transform: scale(.4) rotate(${rotateDeg}deg);
  }
  to {
    transform: scale(1) rotate(${rotateDeg}deg);
  }
`;

S.PigGameContainer = styled.div`
  background: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)),
    url("/images/assets/thePigGame/back.jpg") !important;
  background-size: cover !important;
  background-position: center !important;

  position: relative;

  // display: grid;
  // place-items: center;

  user-select: none;

  touch-action: manipulation;
`;

// =================== Modals Container ======================
S.ModalsContainer = styled.div`
  position: absolute;
  right: 7%;
  top: 10%;
`;

// ================ Player 2 sign in + out button ================
S.Player2SignInBtn = styled.button`
  ${signInOutBtnStyles}
`;

S.Player2SignOutBtn = styled.button`
  ${signInOutBtnStyles}
`;

// ================ Information icon ================
S.InfoBtn = styled.button`
  font-size: clamp(0.8rem, 1vw, 1rem);
  width: 2em;
  height: 2em;
  background: ${(props) => props.theme.pigGamePage.playerLogInBtn_primary};
  color: ${(props) => props.theme.pigGamePage.PlayerLogInBtn_secondary};
  border: 1px solid
    ${(props) => props.theme.pigGamePage.PlayerLogInBtn_secondary};
  border-radius: 100%;
  text-align: center;
`;

S.InfoIcon = styled.i`
  font-size: 1em;
`;

S.playerIcon = styled.i`
  font-size: 1em;
`;

S.GameConsoleContainer = styled.div`
  width: 100vw;
  max-width: 1200px;
  height: 60vh;
  background: white;

  // font-family: Lato;

  display: flex;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  touch-action: manipulation;
`;

S.PlayerOnePanel = styled.div`
  ${panelStyles}
`;
S.PlayerTwoPanel = styled.div`
  ${panelStyles}
`;

S.StrikeIcon = styled.i`
  font-size: 1.3em;
  color: red;
`;

/* ================= Player 1 Strikes effect ================= */
S.Player1Strikes = styled.h2`
  ${strikesStyles}
  top: 30%;
  left: 15%;
  animation: ${(props) => strikeAnimation(-22)} 200ms forwards;
`;

/* ================= Player 2 Strikes effect ================= */
S.Player2Strikes = styled.h2`
  ${strikesStyles}
  top: 30%;
  right: 15%;
  animation: ${(props) => strikeAnimation(22)} 200ms forwards;
`;

// ================= PlayerInfoWrapper =================

S.PlayerInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  border-radius: 200px;
`;

S.PlayerPic = styled.div`
  font-size: clamp(1.4rem, 2.3vw, 2.3rem);
  width: 1em;
  height: 1em;
  border-radius: 100%;
  background: ${(props) => `url(${props.imgsrc})`};
  background-position: center;
  background-size: cover;
  margin-right: 0.4em;
  cursor: pointer;
`;
S.PlayerName = styled.h2`
  position: relative;
  display: inline-block;
  font-weight: 100;

  font-size: ${(props) => `clamp(${props.fontSize}rem, 2vw, 2rem);`}

  letter-spacing: 2px;

  transform: translateX(-6%);

  &.active {
    font-weight: 300;
  }
`;

// ================== Panel Common =====================

S.TotalScore = styled.h2`
  font-weight: 200;
  font-size: clamp(2rem, 4vw, 4rem);
  color: ${(props) => props.theme.pigGamePage.totalScore};
`;
S.CurrentScoreContainer = styled.div`
  background: ${(props) => props.theme.pigGamePage.current_container};
  display: inline-block;
  font-size: clamp(0.7rem, 1.2vw, 1.2rem);
  padding: 1em 1.6em;
`;

S.CurrentSpan = styled.span`
  font-size: clamp(0.5rem, 0.7vw, 0.7rem);
`;

S.CurrentScore = styled.h3`
  font-size: clamp(0.7rem, 1.2vw, 1.2rem);
  color: white;
`;

// ================== Btns =====================
S.NewGameBtn = styled.button`
  ${btnStyles}
  top: 60px;
  transition: all 500ms;
  transform: translateX(-45%);
  font-size: clamp(1rem, 1.8vw, 1.6rem);
`;

S.RollDiceBtn = styled.button`
  ${btnStyles}
  transform: translateX(-51%);
  top: 65%;
  font-size: clamp(0.9rem, 1.2vw, 1.2rem);
`;

S.HoldBtn = styled.button`
  ${btnStyles}
  transform: translateX(-51%);
  top: 75%;
  font-size: clamp(0.9rem, 1.2vw, 1.2rem);
`;

// ================== Others =====================

S.CrownLeft = styled.div`
  position: absolute;
  top: 4%;
  left: 4%;
  animation: firework 1s forwards;

  & svg {
    font-size: clamp(1.4rem, 2.5vw, 2.5rem);
  }

  @keyframes firework {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

S.CrownRight = styled.div`
  position: absolute;
  top: 4%;
  right: 4%;
  animation: firework 1s forwards;

  & svg {
    font-size: clamp(1.4rem, 2.5vw, 2.5rem);
  }

  @keyframes firework {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

S.TargetInput = styled.input`
  position: absolute;
  font-size: clamp(0.7rem, 1.5vw, 1.3rem);
  left: 50%;
  transform: translateX(-50%);
  top: 85%;
  padding: 0.2em 0.5em;
  width: 8em;
  border: 1px solid ${(props) => props.theme.pigGamePage.targetInput_border};

  text-align: center;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
`;

S.Dice = styled.img`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);

  font-size: clamp(0.7rem, 1.5vw, 1.3rem);
  --size: 5em;
  width: var(--size);
  height: var(--size);
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.1);

  cursor: grab;

  &:active {
    transform: scale(1.4) translateX(-35%);
    box-shadow: 0px 15px 12px rgba(0, 0, 0, 0.2);
  }
`;

export default S;
