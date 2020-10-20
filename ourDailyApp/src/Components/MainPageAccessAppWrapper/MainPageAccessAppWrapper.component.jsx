import React from "react";
import S from "./MainPageAccessAppWrapper.style";

import { useSelector } from "react-redux";

import MainPageAccessAppBtn from "../MainPageAccessAppBtn/MainPageAccessAppBtn.component";
import Loader from "../../Components/RenderPropsComs/Loader/Loader.renderPropCom";
import RippleSpinner from "../../Components/Molecules/Spinners/RippleSpinner/RippleSpinner.component";

import PropTypes from "prop-types";

const MainPageAccessAppWrapper = () => {
  const accessAppBtns = useSelector((state) => state.app.accessAppBtns);
  return (
    <S.MainPageAccessAppWrapper className="application-container">
      <Loader SpinnerComponent={RippleSpinner} isLoading={!!!accessAppBtns}>
        {() =>
          accessAppBtns.map((app, index) => (
            <MainPageAccessAppBtn key={index} app={app} index={index} />
          ))
        }
      </Loader>
    </S.MainPageAccessAppWrapper>
  );
};

MainPageAccessAppWrapper.propTypes = {
  accessAppBtns: PropTypes.array,
};

export default MainPageAccessAppWrapper;
