import React from "react";
import S from "./pigGamePage.style";

import { renderProfilePicture } from "../../utils/conditional";
import { playerNameFontSize } from "./pigGameUtils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {useDispatch, useSelector} from "react-redux";
import {
  selectDiceNumber,
  selectActivePlayer,
  selectPlayer1Obj,
  selectPlayer2Obj,
  selectWinner,
  selectFinalScore,
  selectStrikes,
} from "../../redux/pigGame/pigGame.selectors";

import {
  toggleSignInModal,
  toggleInfoModal,
} from "../../redux/pigGameModals/pigGameModals.actions";
import {
  rollDice,
  holdDice,
  startNewGame,
  changeFinalScore,
} from "../../redux/pigGame/pigGame.actions";
import _arrayBufferToBase64 from "../../utils/bufferArrayToBase64";
import { signOutStart } from "../../redux/pigGamePlayer2/pigGamePlayer2.actions";
import useAccessControl from "../../hooks/useAccessControl.hooks";

import Player2SignInModal from "./Components/player2SignInModal.component";
import InfoModal from "./Components/infoModal.component";

const PigGamePage = ({
  diceNumber,
  rollDice,
  holdDice,
  startNewGame,
  activePlayer,
  selectPlayer1Obj,
  selectPlayer2Obj,
  selectWinner,
  finalScore,
  changeFinalScore,
  photoURL,
  strikesNum,
  signOutStart,
}) => {

  const dispatch = useDispatch();
  const {user, isLogged} = useAccessControl();
  const userAvatar = useSelector(state => state.auth_P.userAvatar);
  const {displayName: player2Name, photoURL: player2Avatar, isLogged: isPlayer2Logged} = useSelector(state => state.pigGamePlayer2);

  return (
    <S.PigGameContainer className="PigGame-Page h-screen w-screen">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      </style>
      {/* ================= Player TWO Sign In BTN and MODAL ================= */}
      <Player2SignInModal />
      <InfoModal />
      <S.ModalsContainer>
        {isPlayer2Logged ? (
          <S.Player2SignOutBtn onClick={signOutStart}>
            <S.playerIcon className="iconfont icon-player" />
            Player2 Log Out
          </S.Player2SignOutBtn>
        ) : (
          <S.Player2SignInBtn onClick={() => dispatch(toggleSignInModal())}>
            <S.playerIcon className="iconfont icon-player" />
            Player2 Log In
          </S.Player2SignInBtn>
        )}
        <S.InfoBtn onClick={() => dispatch(toggleInfoModal())}>
          <S.InfoIcon className="iconfont icon-FontAwesomeinfo" />
        </S.InfoBtn>
      </S.ModalsContainer>

      <S.GameConsoleContainer className="game-console-container">
        {/* ================= Player One Panel ================= */}
        <S.PlayerOnePanel className={activePlayer === 1 && "active"}>
          {/* ================= Player 1 Strikes effect ================= */}
          {strikesNum !== 0 && activePlayer === 1 && (
            <S.Player1Strikes>
              {strikesNum} STRIKES
              <S.StrikeIcon className="iconfont icon-dice" />
            </S.Player1Strikes>
          )}
          {/* ================= Player One Info Container ================= */}
          <S.PlayerInfoContainer>
            <S.PlayerPic
            src={_arrayBufferToBase64(userAvatar)}
            className="mr-6"
            ></S.PlayerPic>
            <S.PlayerName
              className={`${activePlayer === 1 && "active"} player-name`}
              fontSize={
                isLogged
                  ? playerNameFontSize(user.name.length)
                  : 1
              }
            >
              {isLogged
                ? user.name
                : "Player 1"}
            </S.PlayerName>
          </S.PlayerInfoContainer>
          {selectWinner === "player1" && (
            <S.CrownLeft className="fireworks">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-crown"></use>
              </svg>
            </S.CrownLeft>
          )}
          <S.TotalScore>{selectPlayer1Obj.totalScore}</S.TotalScore>
          <S.CurrentScoreContainer>
            <S.CurrentSpan>CURRENT</S.CurrentSpan>
            <S.CurrentScore id="currentScore-player1">
              {selectPlayer1Obj.currentScore}
            </S.CurrentScore>
          </S.CurrentScoreContainer>
        </S.PlayerOnePanel>
        {/* ================= Player Two Panel ================= */}
        <S.PlayerTwoPanel className={activePlayer === 2 && "active"}>
          {/* ================= Player 2 Strikes effect ================= */}
          {strikesNum !== 0 && activePlayer === 2 && (
            <S.Player2Strikes>
              {strikesNum} STRIKES
              <S.StrikeIcon className="iconfont icon-dice" />
            </S.Player2Strikes>
          )}
          {/* ================= Player Two Info Container ================= */}
          <S.PlayerInfoContainer>
            <S.PlayerPic
              src={_arrayBufferToBase64(player2Avatar)}
              className="mr-6"
              ></S.PlayerPic>
              <S.PlayerName
                className={`${activePlayer === 1 && "active"} player-name`}
                fontSize={
                  isLogged
                    ? playerNameFontSize(player2Name.length)
                    : 1
                }
              >
                {isLogged
                  ? player2Name
                  : "Player 1"}
            </S.PlayerName>
          </S.PlayerInfoContainer>
          {selectWinner === "player2" && (
            <S.CrownRight className="fireworks">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-crown"></use>
              </svg>
            </S.CrownRight>
          )}
          <S.TotalScore>{selectPlayer2Obj.totalScore}</S.TotalScore>
          <S.CurrentScoreContainer>
            <S.CurrentSpan>CURRENT</S.CurrentSpan>
            <S.CurrentScore id="currentScore-player2">
              {selectPlayer2Obj.currentScore}
            </S.CurrentScore>
          </S.CurrentScoreContainer>
        </S.PlayerTwoPanel>
        {/* ================= Controls ================= */}
        <S.NewGameBtn onClick={startNewGame}>NEW GAME</S.NewGameBtn>
        <S.RollDiceBtn
          onClick={() => {
            rollDice();
          }}
        >
          ROLL DICE
        </S.RollDiceBtn>
        <S.HoldBtn onClick={holdDice}>HOLD</S.HoldBtn>
        <S.TargetInput
          type="number"
          placeholder="FINAL SCORE"
          value={finalScore}
          onChange={(event) => {
            const value = parseInt(event.target.value, 10);
            changeFinalScore(value);
          }}
        />
        {diceNumber !== null && (
          <S.Dice
            src={`/images/assets/thePigGame/dice-${diceNumber}.png`}
            onClick={rollDice}
          />
        )}
      </S.GameConsoleContainer>
    </S.PigGameContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  diceNumber: selectDiceNumber,
  activePlayer: selectActivePlayer,
  selectPlayer1Obj: selectPlayer1Obj,
  selectPlayer2Obj: selectPlayer2Obj,
  selectWinner: selectWinner,
  finalScore: selectFinalScore,
  strikesNum: selectStrikes,
  // isMainUserLogged: selectIsUserLogged,
});

const mapDispatchToProps = (dispatch) => ({
  rollDice: () => dispatch(rollDice()),
  holdDice: () => dispatch(holdDice()),
  startNewGame: () => dispatch(startNewGame()),
  changeFinalScore: (newFinalScore) =>
    dispatch(changeFinalScore(newFinalScore)),
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PigGamePage);
