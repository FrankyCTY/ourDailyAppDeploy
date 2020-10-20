import React, { useEffect } from "react";
import S from "./ApplicationOverview.style";

import { updateRoutePath } from "../../redux/routePath/routePath.actions";
import { createStructuredSelector } from "reselect";
import { connect, useSelector } from "react-redux";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import AppStoreCard from "../../Components/Cards/AppStoreCard/AppStoreCard.component";
import AppStoreCardPreloader from "../../Components/Cards/AppStoreCard/AppStoreCardPreloader.component";
import "./transitionGroup.scss";
import {
  selectIsApplicationsLoaded,
  selectApplicationsInArray,
} from "../../redux/app/app.selector";

const ApplicationOverview = ({
  updateRoutePath,
  isLoading,
  // applications,
  // ...otherProps
}) => {
  useEffect(() => {
    updateRoutePath({
    page: "shop",
      details: {},
    });

    return () => {
      updateRoutePath({
        page: "",
        details: {},
      });
    };
  }, [updateRoutePath]);

  const applications = useSelector(state => state.app.applications);

  return (
    <S.ApplicationOverviewContainer className="application-overview">
      {/* ============= content main ============= */}
      <S.ShopContentContainer className={`shop-content-main`}>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={isLoading}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            <S.CardSectionContainer className="CardSectionContainer gs-PageContentContainer">
              {isLoading
                ? [...Array(6)].map((e, index) => (
                    <AppStoreCardPreloader key={index} />
                  ))
                : applications.map((app, index) => (
                    <AppStoreCard key={index} id={app.id} app={app} />
                  ))}
            </S.CardSectionContainer>
          </CSSTransition>
        </SwitchTransition>
      </S.ShopContentContainer>
    </S.ApplicationOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsApplicationsLoaded(state),
  applications: selectApplicationsInArray,
});

const mapDispatchToProps = (dispatch) => ({
  updateRoutePath: (routePathDetails) =>
    dispatch(updateRoutePath(routePathDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationOverview);
