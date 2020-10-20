import React from "react";
import S from "./DetailedItemBlock.style";

import { useDispatch, connect } from "react-redux";
import {
  selectWishListItemExist,
} from "../../redux/cart/cart.selectors";
import { addAppToCartStart, addAppToWishListStart, removeAppToWishListStart,   removeAppFromCartStart } from "../../redux/cart/cart.actions";
import useRouter from "../../hooks/useRouter.hooks";
import addCartAnimation from "../../utils/animations/addCardAnimation";

const DetailedItemBlock = ({ cartItem, itemType, animationAppendTo, wishListed }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <S.CartItemContainer className="cart-item">
      {/* ============= Items - img ============= */}
      <S.ImgWrapper
        className="img-wrapper"
        onClick={() => router.push(`/shop/${cartItem.route}`)}
      >
        <img
          src={`${cartItem.imgSrc}.jpeg`}
          alt="cart item"
          className="img--item"
        />
      </S.ImgWrapper>
      {/* ============= Items - info ============= */}
      <div className="title-and-creator">
        <S.TitleText
          className="item-title"
          onClick={() => router.push(`/shop/${cartItem.route}`)}
        >
          {cartItem.name}
        </S.TitleText>
        <S.CreatorText
          className="item-creator"
          onClick={() => router.push(`/shop/${cartItem.route}`)}
        >
          By {cartItem.creator}
        </S.CreatorText>
      </div>
      <S.PriceText className="item-price">${cartItem.price}</S.PriceText>
      {/* ============= Items - btns ============= */}
      <S.ButtonsWrapper className="item-buttons-wrapper">
        <S.BtnRemove
          className="btn--remove"
          onClick={() => {
            if (itemType === "cart") {
              dispatch(removeAppFromCartStart(cartItem._id, cartItem.price));
            } else {
              dispatch(removeAppToWishListStart(cartItem._id));
            }
          }}
        >
          Remove
        </S.BtnRemove>
        {itemType === "cart" ? (
          <S.BtnToWishList
            className="btn--toWishList"
            /* onClick={() => dispatch(moveToWishList(cartItem))} */
            onClick={() => {
              if(wishListed(cartItem._id)) {
                dispatch(removeAppToWishListStart(cartItem._id));
              } else {
                dispatch(addAppToWishListStart(cartItem));
              }
            }}
          >
            Move to Wishlist
          </S.BtnToWishList>
        ) : (
          <S.BtnToCartList
            className="btn--toCartList"
            onClick={() => {
              /* ================ animations ================ */
              addCartAnimation(cartItem.imgSrc, animationAppendTo);
              dispatch(addAppToCartStart(cartItem));
            }}
          >
            Add to cart
          </S.BtnToCartList>
        )}
      </S.ButtonsWrapper>
    </S.CartItemContainer>
  );
};

const mapStateToProps = (state) => ({
  wishListed: (appId) => selectWishListItemExist(appId)(state),
});

export default connect(mapStateToProps)(DetailedItemBlock);
