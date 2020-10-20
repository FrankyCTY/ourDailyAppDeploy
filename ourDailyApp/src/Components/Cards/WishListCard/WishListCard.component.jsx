import React from "react";
import S from "./WishListCard.style.jsx";

import useRouter from "../../../hooks/useRouter.hooks";
import {useDispatch} from "react-redux"

import { addAppToCartStart, removeAppToWishListStart  } from "../../../redux/cart/cart.actions";
import addCartAnimation from "../../../utils/animations/addCardAnimation";

import PropTypes from "prop-types";

const WishListCard = ({
  wishlistItem,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className="wishlist-min850">
      <S.CardWrapper
        className="card-wishlistItem-wrapper"
        onClick={() => router.push(`/shop/${wishlistItem.route}`)}
      >
        {/* ========== wishlist item image =========== */}
        <S.ImageWrapper className="img-wrapper">
          <S.Image
            src={`${wishlistItem.imgSrc}.jpeg`}
            alt={`${wishlistItem.name}`}
            className="img-app"
          />
        </S.ImageWrapper>
        {/* ====================== card-bottom-part ====================== */}
        <S.CardBottomWrapper className="card-bottom-part">
          {/* ========== wishlist item info text =========== */}
          <S.ItemTitleText className="wishlistItem-title">
            {wishlistItem.name}
          </S.ItemTitleText>
          <S.ItemCreatorText className="wishlistItem-creator">
            {wishlistItem.creator}
          </S.ItemCreatorText>

          <S.BtnAndPriceContainer className="btn-and-price">
            {/* ========== btn - to cart =========== */}
            <S.BtnAddToCart
              className="btn-addToCart"
              onClick={(event) => {
                event.stopPropagation();
                dispatch(addAppToCartStart(wishlistItem._id));


                /* ================ animations ================ */
                addCartAnimation(wishlistItem.imgSrc, ".js_PageContainer");
              }}
            >
              Add to cart
            </S.BtnAddToCart>
            {/* ========== price text =========== */}
            <S.TotalPriceText className="total-price-text">
              <span className="dollar-price-text">
                $
                <S.PriceText className="price-text">
                  {wishlistItem.price}
                </S.PriceText>
              </span>
            </S.TotalPriceText>
          </S.BtnAndPriceContainer>
        </S.CardBottomWrapper>
        {/* ====================== element - absolute ====================== */}

        <S.IconHeart
          className={`iconfont icon-heart`}
          onClick={(event) => {
            // prevent click on the card body
            event.stopPropagation();
            dispatch(removeAppToWishListStart(wishlistItem._id));
          }}
        ></S.IconHeart>
      </S.CardWrapper>
    </div>
  );
};

React.propTypes = {
  wishListItem: PropTypes.object.isRequired,
  toogleWishListItem: PropTypes.func.isRequired,
  moveItemToCartList: PropTypes.func.isRequired,
};

export default WishListCard;
