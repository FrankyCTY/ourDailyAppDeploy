import React from "react";
import S from "./cartPreview.style";

import { connect } from "react-redux";
import useRouter from "../../hooks/useRouter.hooks";

import {
  toggleCartPopUp,
  removeAppFromCartStart,
} from "../../redux/cart/cart.actions";
import {
  selectCartItemsQuantity,
  selectCartItems,
  selectCartMoreItems,
  selectCartPopUpHidden,
  selectCartItemsTotalPrice,
} from "../../redux/cart/cart.selectors";

import { createStructuredSelector } from "reselect";

const CartPreview = ({
  itemsQuantity,
  cartItems,
  moreItemText,
  cartPopUpHidden,
  toggleCartPopUp,
  cartItemsTotalPrice,
  removeAppFromCartStart,
}) => {
  const router = useRouter();

  return (
    <S.CartPreviewContainer
      className={`${!cartPopUpHidden && "active"} cart-preview`}
    >
      {itemsQuantity === 0 && [
        //   ======================= cart empty text =======================
        <S.EmptyCartText key="1" className="empty-cart-text">
          Your cart is empty!
        </S.EmptyCartText>,
        <S.BtnClosePreview
          key="2"
          className="btn--closePreview"
          onClick={toggleCartPopUp}
        >
          Close
        </S.BtnClosePreview>,
      ]}
      {itemsQuantity !== 0 && [
        //   ======================= items wrapper =======================
        <S.CartItemsWrapper className="items-wrapper" key="1">
          {cartItems !== null &&
            cartItems
              .filter((cartItem, index) => index < 3)
              .map((cartItem) => {
                return (
                  <S.CartItemContainer className="cart-item" key={cartItem.id}>
                    <S.LeftContainer className="left-side">
                      <S.ImageWrapper className="img-wrapper">
                        <S.CartItemImage
                          src={`${cartItem.imgSrc}.jpeg`}
                          alt="cart item"
                          className="cartItem-img"
                        />
                      </S.ImageWrapper>
                      <S.ItemNameText className="item-name">
                        {cartItem.name}
                      </S.ItemNameText>
                    </S.LeftContainer>
                    <div className="right-side">
                      <span className="item-price">{`$${cartItem.price}`}</span>
                      <S.IconRemoveItem
                        className="iconfont icon-chax"
                        onClick={() => {
                          removeAppFromCartStart(cartItem._id, cartItem.price);
                        }}
                      ></S.IconRemoveItem>
                    </div>
                  </S.CartItemContainer>
                );
              })}
        </S.CartItemsWrapper>,
        //   ======================= Render 1 - more-items text =======================
        itemsQuantity > 3 && (
          <S.MoreItemsText key="2" className="more-items">
            And {moreItemText} more items...
          </S.MoreItemsText>
        ),
        //   ======================= Render 2 - total-items text =======================
        itemsQuantity <= 3 && (
          <S.TitleItemsText key="2" className="total-items">
            You have {itemsQuantity} {itemsQuantity === 1 ? "item" : "items"} in
            the cart
          </S.TitleItemsText>
        ),
        //   ======================= total price =======================
        <S.TotalPriceText key="3" className="total-price">
          Total: ${cartItemsTotalPrice < 0 ? "0" : cartItemsTotalPrice}
        </S.TotalPriceText>,
        //   ======================= btns--wrapper =======================
        <S.ButtonsContainer key="4" className="buttons-wrapper">
          <S.BtnToCart
            className="btn--toCart"
            onClick={() => {
              router.push("/cart");
              toggleCartPopUp();
            }}
          >
            Go To Cart
          </S.BtnToCart>

          <S.BtnClosePreview
            className="btn--closePreview"
            onClick={toggleCartPopUp}
          >
            Close
          </S.BtnClosePreview>
        </S.ButtonsContainer>,
      ]}
    </S.CartPreviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsQuantity: selectCartItemsQuantity,
  cartItems: selectCartItems,
  moreItemText: selectCartMoreItems,
  cartPopUpHidden: selectCartPopUpHidden,
  cartItemsTotalPrice: selectCartItemsTotalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  removeAppFromCartStart: (appId, appPrice) => dispatch(removeAppFromCartStart(appId, appPrice)),
  toggleCartPopUp: () => dispatch(toggleCartPopUp()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPreview);
