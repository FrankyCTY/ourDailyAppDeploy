import CartActionTypes from "./cart.types";

export const setIsGettingCartAppsTrue = () => ({
  type: CartActionTypes.SET_GETTING_CART_APPS_TRUE
})

export const setIsGettingCartAppsFalse = () => ({
  type: CartActionTypes.SET_GETTING_CART_APPS_FALSE
})

export const populateCartApps = (apps) => ({
  type: CartActionTypes.POPULATE_CART_APPS,
  apps
})

export const getAppsInCartStart = () => ({
  type: CartActionTypes.GET_CART_APPS_START,
})
export const getAppsInCartSuccess = () => ({
  type: CartActionTypes.GET_CART_APPS_SUCCESS,
})
export const getAppsInCartFailure = () => ({
  type: CartActionTypes.GET_CART_APPS_FAILURE,
})

export const addAppToCartStart = (appObj) => ({
  type: CartActionTypes.ADD_APP_START,
  appObj
})

export const addAppToCartSuccess = () => ({
  type: CartActionTypes.ADD_APP_SUCCESS
})

export const addAppToCartFailure = () => ({
  type: CartActionTypes.ADD_APP_FAILURE
})

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM_CART,
  payload: item,
});

export const removeItem = (appId) => ({
  type: CartActionTypes.REMOVE_ITEM_CART,
  appId
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});

export const toggleCartPopUp = () => ({
  type: CartActionTypes.TOGGLE_CART_POPUP_HIDDEN,
});

export const closeCartPopUp = () => ({
  type: CartActionTypes.CLOSE_CART_POPUP,
});

export const addItemPriceToTotal = (price) => ({
  type: CartActionTypes.ADD_ITEM_PRICE,
  payload: price,
});
export const minusItemPriceToTotal = (price) => ({
  type: CartActionTypes.MINUS_ITEM_PRICE,
  payload: price,
});

export const removeAppFromCartStart = (appId, appPrice) => ({
  type: CartActionTypes.REMOVE_APP_FROM_CART_START,
  appId,
  appPrice,
})

export const moveToWishList = (item) => ({
  type: CartActionTypes.MOVE_TO_WISHLIST,
  payload: item,
});

export const updateCartTotalPrice = (newTotalPrice) => ({
  type: CartActionTypes.UPDATE_TOTALPRICE_CART,
  newTotalPrice
})

export const updateAllAppsInCartStart = (appIds) => ({
  type: CartActionTypes.UPDATE_CART_ALL_APPS_START,
  appIds
}) 
export const updateAllAppsInCartSuccess = () => ({
  type: CartActionTypes.UPDATE_CART_ALL_APPS_SUCCESS,
}) 
export const updateAllAppsInCartFailure = () => ({
  type: CartActionTypes.UPDATE_CART_ALL_APPS_FAILURE,
}) 

// ================= WishList Actions =================
export const addWishListItem = (item) => ({
  type: CartActionTypes.ADD_ITEM_WISHLIST,
  payload: item,
});

export const removeWishListItem = (appId) => ({
  type: CartActionTypes.REMOVE_ITEM_WISHLIST,
  appId
});

export const toggleWishListItem = (item) => ({
  type: CartActionTypes.TOGGLE_ITEM_WISHLIST,
  payload: item,
});

export const moveToCartList = (item) => ({
  type: CartActionTypes.MOVE_TO_CARTLIST,
  payload: item,
});

export const addAppToWishListStart = (appObj) => ({
  type: CartActionTypes.ADD_APP_WISHLIST_START,
  appObj,
})

export const addAppToWishListSuccess = () => ({
  type: CartActionTypes.ADD_APP_WISHLIST_SUCCESS,
})

export const addAppToWishListFailure = () => ({
  type: CartActionTypes.ADD_APP_WISHLIST_FAILURE,
})

export const removeAppToWishListStart = (appId) => ({
  type: CartActionTypes.REMOVE_APP_WISHLIST_START,
  appId,
})

export const removeAppToWishListSuccess = () => ({
  type: CartActionTypes.REMOVE_APP_WISHLIST_SUCCESS,
})

export const removeAppToWishListFailure = () => ({
  type: CartActionTypes.REMOVE_APP_WISHLIST_FAILURE,
})

export const setIsGettingWishlistAppsTrue = () => ({
  type: CartActionTypes.SET_GETTING_WISHLIST_APPS_TRUE,
})

export const setIsGettingWishlistAppsFalse = () => ({
  type: CartActionTypes.SET_GETTING_WISHLIST_APPS_FALSE,
})

export const setIsTogglingWishlistAppTrue = () => ({
  type: CartActionTypes.SET_TOGGLING_WISHLIST_APP_TRUE,
})

export const setIsTogglingWishlistAppFalse = () => ({
  type: CartActionTypes.SET_TOGGLING_WISHLIST_APP_FALSE,
})

export const getAppsInWishlistStart = () => ({
  type: CartActionTypes.GET_WISHLIST_APPS_START,
})
export const getAppsInWishlistSuccess = () => ({
  type: CartActionTypes.GET_WISHLIST_APPS_SUCCESS,
})
export const getAppsInWishlistFailure = () => ({
  type: CartActionTypes.GET_WISHLIST_APPS_FAILURE,
})
export const populateWishlistApps = (apps) => ({
  type: CartActionTypes.POPULATE_WISHLIST_APPS,
  apps
})
export const updateAllAppsInWishlistStart = (appIds) => ({
  type: CartActionTypes.UPDATE_WISHLIST_ALL_APPS_START,
  appIds
}) 
export const updateAllAppsInWishlistSuccess = () => ({
  type: CartActionTypes.UPDATE_WISHLIST_ALL_APPS_SUCCESS,
}) 
export const updateAllAppsInWishlistFailure = () => ({
  type: CartActionTypes.UPDATE_WISHLIST_ALL_APPS_FAILURE,
}) 