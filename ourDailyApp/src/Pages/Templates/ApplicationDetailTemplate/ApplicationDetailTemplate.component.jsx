import React, { useEffect } from "react";
import S from "./ApplicationDetailTemplate.style";

import { connect } from "react-redux";
import { selectApp } from "../../../redux/app/app.selector";
import useRouter from "../../../hooks/useRouter.hooks";
import {
  selectWishListItemExist,
  selectCartItemExist,
  selectIsTogglingWishlistApp,
} from "../../../redux/cart/cart.selectors";
import { addAppToCartStart, addAppToWishListStart, removeAppToWishListStart } from "../../../redux/cart/cart.actions";
import { updateRoutePath } from "../../../redux/routePath/routePath.actions";
import addCartAnimation from "../../../utils/animations/addCardAnimation";
import ClassicLoader from "../../../Components/Molecules/Spinners/ClassicSpinner/ClassicSpinner.component";
import PropTypes from "prop-types";

import CustomTag from "../../../Components/Molecules/customTag/customTag.component";

const ApplicationDetailPage = ({
  appData,
  addAppToCartStart,
  wishListed,
  // toggleWishListItem,
  addAppToWishListStart,
  removeAppToWishListStart,
  cartItemExist,
  updateRoutePath,
  isTogglingWishlistApp,
}) => {
  //=========================== Life Cycle Hooks =========================
  useEffect(() => {
    updateRoutePath({
      page: "applicationDetails",
      details: {
        title: appData.name,
      },
    });

    return () => {
      updateRoutePath({
        page: "",
        details: {},
      });
    };
  }, [updateRoutePath, appData.name]);


  const { videoSrc, tags, intro, features } = appData;
  const router = useRouter();

  return (
    <S.PageContentContainer className="app-content-main">
      <S.VideoWrapper className="video-wrapper">
        <S.Video
          src={videoSrc}
          title="vimeo video"
          allowFullScreen
          frameBorder="0"
          className="video"
        ></S.Video>
      </S.VideoWrapper>

      <S.Intro
        className="intro"
        dangerouslySetInnerHTML={{ __html: intro }}
      ></S.Intro>

      <S.TagsWrapper className="tags">
        {tags !== null &&
          tags.map((tag, index) => (
            <CustomTag tagContent={tag} key={index}>
              {tag}
            </CustomTag>
          ))}
      </S.TagsWrapper>
      {/* ================ Feature Part ================ */}
      <S.SectionTitle className="subtitle">
        <span aria-label="thunder" role="img">
          ⚡
        </span>{" "}
        What are the features?
      </S.SectionTitle>
      <S.FeatureList className="feature-list">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </S.FeatureList>

      {/* ================================ Buttons ================================ */}
      {/* ================ wishlist part ================ */}
      <S.BtnAddToWishlist
        className="btn--addWishList"
        disabled={isTogglingWishlistApp}
        onClick={() => {
          if(wishListed(appData._id)) {
            removeAppToWishListStart(appData._id);
          } else {
            addAppToWishListStart(appData);
          }
        }}
      >
        {!isTogglingWishlistApp && "Wishlist"}
        {isTogglingWishlistApp ? <ClassicLoader/> :
        (<S.IconSvg
          className={`iconfont icon-heart ${
            wishListed(appData._id) ? "active" : ""
          }`}
        ></S.IconSvg>)}
      </S.BtnAddToWishlist>

      {/* ================ Add to Cart ================ */}
      <S.BtnAddToCart
        className="btn--addToCart"
        onClick={() => {
          /* ================ animations ================ */
          if (cartItemExist(appData._id)) {
            router.push("/cart");
          } else {
            addCartAnimation(appData.imgSrc, ".application-detail-page");
            addAppToCartStart(appData);
          }
        }}
      >
        {cartItemExist(appData._id) ? "Go to cart" : "Add to cart"}
        <S.IconSvg className={`iconfont icon-cart1`}></S.IconSvg>
      </S.BtnAddToCart>
    </S.PageContentContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  appData: selectApp(ownProps.match.params.applicationId)(state),
  wishListed: (appId) => selectWishListItemExist(appId)(state),
  cartItemExist: (appId) => selectCartItemExist(appId)(state),
  isTogglingWishlistApp: selectIsTogglingWishlistApp(state),
});

const mapDispatchToProps = (dispatch) => ({
  addAppToCartStart: (appId) => dispatch(addAppToCartStart(appId)),
  // toggleWishListItem: (item) => dispatch(toggleWishListItem(item)),
  addAppToWishListStart: (appId) => dispatch(addAppToWishListStart(appId)),
  removeAppToWishListStart: (appId) => dispatch(removeAppToWishListStart(appId)),
  updateRoutePath: (routePathDetails) =>
    dispatch(updateRoutePath(routePathDetails)),
});

ApplicationDetailPage.propTypes = {
  wishListed: PropTypes.func.isRequired,
  cartItemExist: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationDetailPage);
