import React from "react";
import S from "./ApplicationDetailTemplateWithPreloader.style";
import "./ApplicationDetailTemplateWithPreloader.style.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ApplicationDetailTemplate from "./ApplicationDetailTemplate.component";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { selectIsApplicationsLoaded } from "../../../redux/app/app.selector";

const ApplicationDetailWithPreloader = ({ isLoading, ...otherProps }) => {
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={isLoading}
        addEndListener={(node, done) => {
          node.addEventListener("transitionend", done, false);
        }}
        classNames="fade"
      >
        <S.PageContainer className="application-detail-page gs-page ">
          {isLoading ? (
            <S.PageContentContainerPreloader className="app-content-main">
              <S.VideoWrapperPreloader className="video-wrapper"></S.VideoWrapperPreloader>
              <S.IntroPreloader1 className="intro-preloader"></S.IntroPreloader1>
              <S.IntroPreloader2 className="intro-preloader"></S.IntroPreloader2>
              <S.IntroPreloader3 className="intro-preloader"></S.IntroPreloader3>
              {/* ================ Tags Part ================ */}
              <S.TagsWrapperPreloader className="tags-preloader">
                {[...Array(3)].map((e, index) => (
                  <S.TagDivPreloader key={index}></S.TagDivPreloader>
                ))}
              </S.TagsWrapperPreloader>

              {/* ================================ Buttons ================================ */}
              {/* ================ wishlist part ================ */}
              <S.BtnAddToWishlistPreloader className="btn--addWishList-preloader"></S.BtnAddToWishlistPreloader>
              {/* ================ Add to Cart ================ */}
              <S.BtnAddToCartPreloader className="btn--addToCart-preloader"></S.BtnAddToCartPreloader>
            </S.PageContentContainerPreloader>
          ) : (
            <ApplicationDetailTemplate {...otherProps} />
          )}
        </S.PageContainer>
      </CSSTransition>
    </SwitchTransition>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsApplicationsLoaded(state),
});

export default connect(mapStateToProps)(ApplicationDetailWithPreloader);
