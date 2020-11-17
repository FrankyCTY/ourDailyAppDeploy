import PigGameActionTypes from "./pigGame.types";
// import { saveGameState } from "../../firebase/firestore/setData";

export const changeDiceNumber = (newDiceNum) => ({
  type: PigGameActionTypes.CHANGE_DICE_NUM,
  payload: newDiceNum,
});

export const switchActivePlayer = () => ({
  type: PigGameActionTypes.SWITCH_ACTIVE_PLAYER,
});

// Game Score Calculation

export const playerAddTotalScore = (num) => ({
  type: PigGameActionTypes.PLAYER_ADD_TOTAL_SCORE,
  // this logic will be handled in utils within reducer
  payload: num,
});
export const playerClearTotalScore = () => ({
  type: PigGameActionTypes.PLAYER_CLEAR_TOTAL_SCORE,
  // this logic will be handled in utils within reducer
});

export const playerAddCurrentScore = (num) => ({
  type: PigGameActionTypes.PLAYER_ADD_CURRENT_SCORE,
  // this logic will be handled in utils within reducer
  payload: num,
});
export const playerClearCurrentScore = () => ({
  type: PigGameActionTypes.PLAYER_CLEAR_CURRENT_SCORE,
  // this logic will be handled in utils within reducer
});

export const checkWinner = () => ({
  type: PigGameActionTypes.CHECK_WINNER,
});

export const startNewGame = () => ({
  type: PigGameActionTypes.START_NEW_PIG_GAME_START,
});

export const loadPigGameStart = () => ({
  type: PigGameActionTypes.LOAD_PIG_GAME_START,
});

export const changeFinalScore = (newFinalScore) => ({
  type: PigGameActionTypes.CHANGE_FINAL_SCORE,
  payload: newFinalScore,
});

export const changePrevScores = (score) => ({
  type: PigGameActionTypes.CHANGE_PREV_SCORES,
  payload: score,
});

export const loadGameState = (gameState) => ({
  type: PigGameActionTypes.LOAD_GAME_STATE,
  payload: gameState,
});

export const loadingIsFinished = () => ({
  type: PigGameActionTypes.LOADING_FINISHED,
});

export const resetPrevScore = () => ({
  type: PigGameActionTypes.RESET_PREV_SCORE,
});

export const addStrikes = () => ({
  type: PigGameActionTypes.ADD_STRIKES,
});

export const clearStrikes = () => ({
  type: PigGameActionTypes.CLEAR_STRIKES,
});

export const rollDice = () => ({
  type: PigGameActionTypes.ROLL_DICE,
});

export const holdDice = () => ({
  type: PigGameActionTypes.HOLD_DICE,
});

export const restorePrevGameData = (gameState) => ({
  type: PigGameActionTypes.RESTORE_PREV_GAME_DATA,
  payload: gameState,
});

export const setPigGameState = (gameState) => ({
  type: PigGameActionTypes.SET_PIG_GAME_STATE,
  gameState,
})

export const isLoadingPigGameTrue = () => ({
  type: PigGameActionTypes.IS_LOADING_PIG_GAME_TRUE,
})

export const isLoadingPigGameFalse = () => ({
  type: PigGameActionTypes.IS_LOADING_PIG_GAME_FALSE,
})

// ========= Thunk action flow =========
