export const addItemToCart = (state, cartItemToAdd) => {
  //Check if item is already in the cart
  //!!Each application can be bought once and added once only
  const itemExist = state.cartItems.find(
    (cartItem) => cartItem._id === cartItemToAdd._id
  );

  console.log("appItem in cart already?", itemExist)

  if (itemExist === undefined) {
    //IF wishlist has the cartItemToAdd then
    //remove the cartItemToAdd from the wishlist
    let newWishList = [];
    if (state.wishListItems !== null) {
      newWishList = state.wishListItems.filter(
        (wishListItem) => wishListItem._id !== cartItemToAdd._id
      );
    }
    console.log({newWishList});
    //Add item
    state.cartItems.unshift(cartItemToAdd);

    //Add price
    const newTotalPrice = state.itemTotalPrice + cartItemToAdd.price;
    return {
      ...state,
      cartItems: state.cartItems,
      itemTotalPrice: newTotalPrice,
      wishListItems: newWishList,
    };
  } else {
    return state;
  }
};

export const removeItemFromCart = (cartItems, appId) => {
  return cartItems.filter((cartItem) => cartItem.id !== appId);
};

export const removeItemFromWishlist = (wishlistItems, appId) => {
  console.log("removingItemFromWishlist")
  const newWishlist =  wishlistItems.filter(wishlistItems => wishlistItems._id !== appId);
  console.log({newWishlist})
  return newWishlist;
}

export const moveItemToWishlist = (state, cartItemToMove) => {
  removeItemFromCart(state.cartItems, cartItemToMove);
  let newState = addWishListItem(state, cartItemToMove);
  return newState;
};

// ================= WishList Utils =================
export const addWishListItem = (state, itemToAdd) => {
  const itemExist = state.wishListItems.find(
    (item) => item._id === itemToAdd._id
  );

  console.log("comparing", state.cartItems, "--------", itemToAdd._id)
  if (itemExist === undefined) {
    let newCartItems = state.cartItems;
    //====== If the itemToAdd already exist in the cartItemsList ======
    if (
      state.cartItems.find((cartItem) => cartItem._id === itemToAdd._id) !==
      undefined
      ) {
        //CHECK 1: IF cartItemList has the wishListItemToAdd then
        //remove the wishListItemToAdd from the cartItemList
        
        newCartItems = state.cartItems.filter(
          (cartItem) => cartItem._id !== itemToAdd._id
        );
          
      //CHECK 2: Also need to deduct the itemTotalPrice for the cartItems total price
      state.itemTotalPrice -= itemToAdd.price;
    }
    //Add item
    state.wishListItems.unshift(itemToAdd);
    return {
      ...state,
      wishListItems: state.wishListItems,
      cartItems: newCartItems,
      itemTotalPrice: state.itemTotalPrice,
    };
  } else {
    return state;
  }
};

export const toggleWishListItems = (state, itemToToggle) => {
  const itemExist = state.wishListItems.find(
    (item) => item.id === itemToToggle.id
  );

  return itemExist === undefined
    ? addWishListItem(state, itemToToggle)
    : {
        ...state,
        wishListItems: removeItemFromCart(state.wishListItems, itemToToggle),
      };
};

export const moveItemToCartList = (state, wishListItemToMove) => {
  removeItemFromCart(state.wishListItems, wishListItemToMove);
  let newState = addItemToCart(state, wishListItemToMove);
  return newState;
};
