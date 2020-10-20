import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import AuthActionTypes from "./Auth/auth.types";

import navReducer from "./nav/nav.reducer";
import shopNavReducer from "./shopNav/shopNav.reducer";
import authReducer from "./Auth/auth.reducer";
import authReducer_P from "./Auth/auth_P.reducer";
import appReducer from "./app/app.reducer";
import commentsConverterReducer from "./commentsConverter/commentsConverter.reducer";
import cart_P_Reducer from "./cart/cart_P.reducer";
import cartReducer from "./cart/cart.reducer";
import routePathReducer from "./routePath/routePath.reducer";
import authPageReducer from "./AuthPage/AuthPage.reducer";
import signUpFormReducer from "./signUpForm/signUpForm.reducer";
import logInFormReducer from "./logInForm/logInForm.reducer";
import UIComponentsReducer from "./UIComponents/uiComponents.reducer";
import UserReducer from "./User/user.reducer";

// =========== Applications ===========
import pigGameReducer from "./pigGame/pigGame.reducer";
import pigGameModalsReducer from "./pigGameModals/pigGameModals.reducer";
import pigGamePlayer2Reducer from "./pigGamePlayer2/pigGamePlayer2.reducer";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["auth_P"]
  whitelist: ["cart_P", "auth_P"],
  // whitelist: [],
  // whitelist: ["cart_P", "pigGame"],
};

const topLevelReducers = combineReducers({
  UIComponents: UIComponentsReducer,
  nav: navReducer,
  auth: authReducer,
  auth_P: authReducer_P,
  user: UserReducer,
  app: appReducer,
  commentsConverter: commentsConverterReducer,
  shopNav: shopNavReducer,
  cart_P: cart_P_Reducer,
  cart: cartReducer,
  routePath: routePathReducer,
  authPage: authPageReducer,
  signUpForm: signUpFormReducer,
  logInForm: logInFormReducer,
  // =========== Applications ===========
  pigGame: pigGameReducer,
  pigGameModals: pigGameModalsReducer,
  pigGamePlayer2: pigGamePlayer2Reducer,
  
});

const rootReducer = (state, action) => {
  
  if(action.type === AuthActionTypes.SIGN_OUT_START) {
    console.log("sign out")
    storage.removeItem('persist:root');
    state = undefined;
  }

  return topLevelReducers(state, action);
}

// export default rootReducer;

export default persistReducer(persistConfig, rootReducer);
