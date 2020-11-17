const Piggame = require("../models/piggame/piggame.model");
const UserService = require("../services/User.service");

class PiggameService {
  getGameState = async (userId, next) => {
    const userService = new UserService();

    let player2Avatar;

    const gameState = await Piggame.findOne({creator: userId}).populate({path: 'player2Id', select: {'name': 1, 'photo': 1}});
    // get player 2 avatar from S3
    if(gameState) {
      // const player2Avatar = await userService.getUserImage(gameState.player2Id.photo, next);
      player2Avatar = await userService.getUserImage(gameState.player2Id.photo, next);
      // const buf = Buffer.from(player2Avatar);
      // gameState.player2Id.photo = buf;
      // console.log({player2Avatar})
    }
    // console.log({gameState})
    return {gameState, player2Avatar};
  }

  createNewGame = async (userId) => {
    const gameState = await Piggame.create({creator: userId});

    return gameState;
  }

  resetGame = async(userId) => {
    const gameState = await Piggame.updateOne({creator: userId}, {
      activePlayer: 1,
      diceNumber: undefined,
      player1: {
        currentScore: 0,
        totalScore: 0,
      },
      player2: {
        currentScore: 0,
        totalScore: 0,
      },
      prev_scores: [0, 0],
      strikes: 0,
      winner: "none",
      createdAt: new Date(),
    }, {new: true});

    return gameState;
  }

  updateEntireGameState = async(userId, newGameState) => {
    const gameState = await Piggame.updateOne({creator: userId}, {...newGameState}, {new: true});
    return gameState;
  }
}

module.exports = PiggameService;