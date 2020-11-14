import React, { useEffect, useState } from "react";
import S from "./ApplicationDetailTemplate.style";

import { connect } from "react-redux";
import { selectApp } from "../../../redux/app/app.selector";
import useRouter from "../../../hooks/useRouter.hooks";
import {
  selectWishListItemExist,
  selectCartItemExist,
  selectIsTogglingWishlistApp,
} from "../../../redux/cart/cart.selectors";
import {useSelector} from "react-redux";
import { addAppToCartStart, addAppToWishListStart, removeAppToWishListStart } from "../../../redux/cart/cart.actions";
import { updateRoutePath } from "../../../redux/routePath/routePath.actions";
import addCartAnimation from "../../../utils/animations/addCardAnimation";
import ClassicLoader from "../../../Components/Molecules/Spinners/ClassicSpinner/ClassicSpinner.component";
import { createStructuredSelector } from "reselect";
import useAccessControl from "../../../hooks/useAccessControl.hooks";
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
  const { videoSrc, tags, intro, features, id: appDataId, appRoute } = appData;
  
  const router = useRouter();

  const {isLogged, adminView} = useAccessControl();
  const ownedApps = useSelector(state => state.app.accessAppBtns);

  const [isPaid, setIsPaid] = useState(false);
  
  useEffect(() => {
    updateRoutePath({
      page: "applicationDetails",
      details: {
        title: appData.name,
      },
    });

    // Check if user can use this app
    if(ownedApps) {
      // 1) On refresh, wait for ownedApps to be populated and determine which path to redirect to
      // 2) may be move it to hooks to reuse on other application
      if(ownedApps.some(app => app.id === appDataId)) {
        setIsPaid(true);
      } else {
        setIsPaid(false);
      }
    }

    return () => {
      updateRoutePath({
        page: "",
        details: {},
      });
    };
  }, [updateRoutePath, appData.name, appDataId, ownedApps]);

const btnsForLoggedIn = () => {
  const renderGoToAppBtn = isPaid || adminView;
  return renderGoToAppBtn ?
  <S.BtnAddToCart
  className="btn--toApp"
  onClick={() => {
      router.push(`/${appRoute}`);
  }}
  >
    Go To App
  </S.BtnAddToCart>
  : 
  <>
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
    </>
}

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
      { isLogged ? btnsForLoggedIn()
      : <S.BtnAddToCart
      className="btn--toLogIn"
      onClick={() => {
          router.push(`/auth`);
      }}
      >
        Log In To Pay
      </S.BtnAddToCart>}
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
