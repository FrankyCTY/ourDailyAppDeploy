import React from "react";
import S from "./MainPageAccessAppWrapper.style";

import { useSelector } from "react-redux";

import MainPageAccessAppBtn from "../MainPageAccessAppBtn/MainPageAccessAppBtn.component";
import Loader from "../../Components/RenderPropsComs/Loader/Loader.renderPropCom";
import RippleSpinner from "../../Components/Molecules/Spinners/RippleSpinner/RippleSpinner.component";
import useAccessControl from "../../hooks/useAccessControl.hooks";
// import plusImg from "/images/assets/plus.jpg";

import PropTypes from "prop-types";

const MainPageAccessAppWrapper = () => {

  const applications = useSelector(state => state.app.applications);
  const accessAppBtns = useSelector((state) => state.app.accessAppBtns);
  const hasAccessAppBtns = (accessAppBtns && accessAppBtns.length > 0);
  const {isLogged, adminView} = useAccessControl();

  const loggedInAccessAppBtn = () => {
    return adminView ? <Loader SpinnerComponent={RippleSpinner} isLoading={!applications}>
    {() =>
      applications.map((app, index) => (
        <MainPageAccessAppBtn key={app.id} name={app.name} route={app.appRoute} img={app.imgSm} hasBorder={app.border} staggerIndex={index} />
      ))
    }
  </Loader>
    : <Loader SpinnerComponent={RippleSpinner} isLoading={!accessAppBtns}>

    {hasAccessAppBtns ? () =>
      accessAppBtns.map((app, index) => (
        <MainPageAccessAppBtn key={app.id} name={app.name} route={app.appRoute} img={app.imgSm} hasBorder={app.border} staggerIndex={index} />
      )) : () => <MainPageAccessAppBtn name="Explore Apps" iconClassName="icon-icon_yingyongguanli" route="shop" isIcon={true} hasBorder={true}/>
    }
  </Loader>
  }

  return (
    <S.MainPageAccessAppWrapper className="application-container">
      {isLogged ? loggedInAccessAppBtn()
        : 
        <Loader SpinnerComponent={RippleSpinner} isLoading={!applications}>
        {() =>
          applications.map((app, index) => (
            <MainPageAccessAppBtn key={app.id} name={app.name} route={app.appRoute} img={app.imgSm} hasBorder={app.border} staggerIndex={index} />
          ))
        }
      </Loader>}
    </S.MainPageAccessAppWrapper>
  );
};

MainPageAccessAppWrapper.propTypes = {
  accessAppBtns: PropTypes.array,
};

export default MainPageAccessAppWrapper;
