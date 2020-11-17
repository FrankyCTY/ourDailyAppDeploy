const withCatchErrAsync = require("../../utils/error/withCatchErrorAsync");
const Piggame = require("../../models/piggame/piggame.model");
const OperationalErr = require("../../helpers/OperationalErr");
const PiggameService = require("../../services/Piggame.service");
const UserService = require("../../services/User.service");
const AuthService = require("../../services/Auth.service");
const User = require("../../models/user/user.model");

exports.loadGameState = withCatchErrAsync(async (req, res, next) => {
  const {id} = req.user;

  const piggameService = new PiggameService();
  let {gameState, player2Avatar} = await piggameService.getGameState(id, next);

  if(!gameState) {
    gameState = await piggameService.createNewGame(id);
  } 

  res.status(200).json({
    status: "success",
    data: {
      gameState,
      player2Avatar,
    }
  })
})

exports.updateEntireGameState = withCatchErrAsync(async (req, res, next) => {
  const {id} = req.user;
  const {newGameState} = req.body;

  const piggameService = new PiggameService();
  const gameState = await piggameService.updateEntireGameState(id, newGameState);

  return res.status(200).json({
    status: "success",
    data: {
      gameState,
    }
  })
})

exports.logInPlayer2 = withCatchErrAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const {game_Id} = req.params;
  const userService = new UserService();
  const authService = new AuthService();

  // DATABASE - check if the user email is in the database
  const user = await User.findOne({ email }).select("+password").select("+active");

  // if account doesn't exist
  if (!user) {
    return next(
      new OperationalErr(
        "form{SEPERATE}Incorrect email or password",
        401,
        "local"
      )
    );
  }

  // Only active user to log in
  if(!user.active) {
    return next(
      new OperationalErr(
        "form{SEPERATE}This account has been deleted, please contact us via email for more details.",
        401, "local"
      )
    )
  }

  // Compare user password to see if valid
  if (!(await user.correctPassword(password, user.password))) {
    return next(
      new OperationalErr(
        "form{SEPERATE}Incorrect email or password",
        401,
        "local"
      )
    );
  }

  // Get user avatar from S3
  const userAvatar = await userService.getUserImage(user.photo, next);

  // If everything goes fine, send token to client
  const {user: userDoc, res: response} = authService.createSendToken(user, res, false);

  // Update PigGame player2 Id
  await Piggame.findByIdAndUpdate(game_Id, {player2Id: user.id});

  return response.status(200).json({
    status: "success",
    data: {
      user: userDoc,
      avatar: userAvatar,
    },
  });  
});

