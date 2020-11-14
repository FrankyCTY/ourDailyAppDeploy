import AuthActionTypes from "./auth.types";

const INITIATE_STATE = {
  isLogged: false,
  user: null,
  userAvatar: null,
  viewAs: "original",
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
      case AuthActionTypes.SET_VIEW_AS:
        return {
          ...state,
          viewAs: action.role,
        }
    default:
      return state;
  }
};

export default authReducer_P;
