import CartActionTypes from "./cart.types";

const INITIATE_STATE = {
  cartPopUpHidden: true,
  isGettingCartApps: false,
  isGettingWishlistApps: false,
  isTogglingWishlistApp: false,
};

const cartReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_POPUP_HIDDEN:
      return {
        ...state,
        cartPopUpHidden: !state.cartPopUpHidden,
      };
    case CartActionTypes.CLOSE_CART_POPUP:
      return {
        ...state,
        cartPopUpHidden: true,
      };
    case CartActionTypes.SET_GETTING_CART_APPS_TRUE:
      return {
        ...state,
        isGettingCartApps: true,
      }
    case CartActionTypes.SET_GETTING_CART_APPS_FALSE:
      return {
        ...state,
        isGettingCartApps: false,
      }
    case CartActionTypes.SET_GETTING_WISHLIST_APPS_TRUE:
      return {
        ...state,
        isGettingWishlistApps: true,
      }
    case CartActionTypes.SET_GETTING_WISHLIST_APPS_FALSE:
      return {
        ...state,
        isGettingWishlistApps: false,
      }
    case CartActionTypes.SET_TOGGLING_WISHLIST_APP_TRUE:
      return {
        ...state,
        isTogglingWishlistApp: true,
      }
    case CartActionTypes.SET_TOGGLING_WISHLIST_APP_FALSE:
      return {
        ...state,
        isTogglingWishlistApp: false,
      }
    default:
      return state;
  }
};

export default cartReducer;
