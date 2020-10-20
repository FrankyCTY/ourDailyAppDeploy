import { createSelector } from "reselect";

const selectCart_P = (state) => state.cart_P;
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart_P],
  (cart) => cart.cartItems
);

export const selectCartItemsQuantity = createSelector(
  [selectCart_P],
  (cart) => {
    return cart.cartItems.length;
  }
);

export const selectCartMoreItems = createSelector(
  [selectCartItemsQuantity],
  (quantity) => quantity - 3
);

export const selectCartItemsTotalPrice = createSelector(
  [selectCart_P],
  (cart) => cart.itemTotalPrice
);

export const selectCartItemExist = (itemIdToCheck) =>
  createSelector([selectCartItems], (cartItems) => {
    if (cartItems.some((item) => item._id === itemIdToCheck) === false) {
      return false;
    } else {
      return true;
    }
  });

// ==================== Cart No Persistent =================

export const selectCartPopUpHidden = createSelector(
  [selectCart],
  (cart) => cart.cartPopUpHidden
);

// ==================== WishList =================
export const selectWishListItems = createSelector(
  [selectCart_P],
  (cart) => cart.wishListItems
);

export const selectWishListQuantity = createSelector([selectCart_P], (cart) => {
  return cart.wishListItems.length;
});

export const selectWishListItemExist = (itemIdToCheck) =>
  createSelector([selectWishListItems], (wishList) => {
    if (wishList.some((item) => item._id === itemIdToCheck) === false) {
      return false;
    } else {
      return true;
    }
  });

export const selectIsTogglingWishlistApp =  createSelector(
  [selectCart],
  (cart) => cart.isTogglingWishlistApp
)

export const selectWishlistItemExist = (itemIdToCheck) =>
  createSelector([selectWishListItems], (wishlistItems) => {
    if (wishlistItems.some((item) => item._id === itemIdToCheck) === false) {
      return false;
    } else {
      return true;
    }
  });
