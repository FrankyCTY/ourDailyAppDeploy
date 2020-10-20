export const switchActivePlayer = (old_activePlayer) => {
  return old_activePlayer === 1 ? 2 : 1;
};

export const addPlayerCurrentScore = (state, num) => {
  const target = `player${state.activePlayer}`;
  let newCurrentScore = state[target].currentScore + num;

  return {
    ...state,
    [target]: {
      ...state[target],
      currentScore: newCurrentScore,
    },
  };
};

export const clearPlayerCurrentScore = (state) => {
  const target = `player${state.activePlayer}`;

  return {
    ...state,
    [target]: {
      ...state[target],
      currentScore: 0,
    },
  };
};

export const addPlayerTotalScore = (state, num) => {
  const target = `player${state.activePlayer}`;
  let newTotalScore = state[target].totalScore + num;

  return {
    ...state,
    [target]: {
      ...state[target],
      totalScore: newTotalScore,
    },
  };
};

export const clearPlayerTotalScore = (state) => {
  const target = `player${state.activePlayer}`;

  return {
    ...state,
    [target]: {
      ...state[target],
      totalScore: 0,
    },
  };
};

export const checkWinner = (state) => {
  // 1. Check if active player has enough totalScore
  const target = `player${state.activePlayer}`;

  // Target's TotalScore >= 100
  if (state[target].totalScore >= state.finalScore) {
    return {
      ...state,
      player1: {
        totalScore: 0,
        currentScore: 0,
      },
      player2: {
        totalScore: 0,
        currentScore: 0,
      },
      winner: target,
    };
  } else {
    return state;
  }
};

export const changePrevScores = (state, score) => {
  const activePlayer = state.activePlayer;
  const oldPrev_scores = state.prev_scores;

  if (activePlayer === 1) {
    return [score, oldPrev_scores[1]];
  } else if (activePlayer === 2) {
    return [oldPrev_scores[0], score];
  }
};

export const resetPlayerPrevScore = (activePlayer, prev_scores) => {
  return activePlayer === 1 ? [0, prev_scores[1]] : [prev_scores[0], 0];
};
