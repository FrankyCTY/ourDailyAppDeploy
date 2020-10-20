import React from "react";
import S from "./CartPageItemsBoard.styled";

import DetailedItemBlock from "../../DetailedItemBlock/DetailedItemBlock.component";

const CartPageItemsBoard = ({
  cartItems,
  wishlistItems,
  cartItemsQuantity,
}) => {
  return (
    <S.CartPageItemsBoard>
      {/* ============= Cart Items ============= */}
      <S.NumOfAppInCartSpan>
        {cartItemsQuantity}{" "}
        {cartItemsQuantity === 1 ? "Application" : "Applications"} in Cart
      </S.NumOfAppInCartSpan>

      <S.CartItemBlockWrapper>
        {/* ============= Render 1: cartItems quantity >= 1 ============= */}
        {cartItemsQuantity !== 0 &&
          cartItems !== null &&
          cartItems.map((cartItem, index) => (
            <DetailedItemBlock
              id={cartItem.id}
              cartItem={cartItem}
              itemType="cart"
              key={index}
            />
          ))}

        {/* ============= Render 2: empty cartItems ============= */}
        {cartItemsQuantity === 0 && (
          <S.EmptyCartItemsWrapper>
            <S.IconCart className="iconfont icon-cart"></S.IconCart>
            <p className="empty-cartItems-text">
              Your cart is empty. Keep shopping to find an application!
            </p>
          </S.EmptyCartItemsWrapper>
        )}
      </S.CartItemBlockWrapper>

      {/* ============= WishList ============= */}
      <S.RecentlyWishlistedText>Recently wishlisted</S.RecentlyWishlistedText>
      {/* ============= Render 1: wishlistItems quantity >= 1 ============= */}
      {wishlistItems.length !== 0 && (
        <S.WishlistWrapper>
          {wishlistItems !== null &&
            wishlistItems.map((wishlistItem, index) => (
              <DetailedItemBlock
                id={wishlistItem.id}
                cartItem={wishlistItem}
                itemType="wishlist"
                key={index}
              />
            ))}
        </S.WishlistWrapper>
      )}
      {/* ============= Render 2: empty wishlist ============= */}
      {wishlistItems.length === 0 && (
        <S.EmptyWishlistText>
          You haven't added any applications to your wishlist.
        </S.EmptyWishlistText>
      )}
    </S.CartPageItemsBoard>
  );
};

export default CartPageItemsBoard;
