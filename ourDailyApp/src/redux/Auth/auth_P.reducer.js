import AuthActionTypes from "./auth.types";

const INITIATE_STATE = {
  isLogged: false,
  user: null,
  userAvatar: null,
  userBg: "https://images.pexels.com/photos/2988589/pexels-photo-2988589.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};

const authReducer_P = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.SET_ISLOGGED_TRUE:
      return {
        ...state,
        isLogged: true,
      };
    case AuthActionTypes.SET_USER_DETAILS:
      return {
        ...state,
        user: action.user,
      };
      case AuthActionTypes.SIGN_OUT:
        return {
          ...state,
          isLogged: false,
        }
      case AuthActionTypes.SET_USER_AVATAR:
        return {
          ...state,
          userAvatar: action.imgBuffer
        }
      case AuthActionTypes.SET_USER_BACKGROUND:
        return {
          ...state,
          userBg: action.bg,
        }
    default:
      return state;
  }
};

export default authReducer_P;
