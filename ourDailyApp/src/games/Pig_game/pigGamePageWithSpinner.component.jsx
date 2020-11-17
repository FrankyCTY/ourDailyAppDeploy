import React, { useEffect } from "react";
import S from "./pigGamePageWithSpinner.style";
import "./pigGamePageWithSpinner.style.scss";

import {loadPigGameStart} from "../../redux/pigGame/pigGame.actions";
import useAccessControl from "../../hooks/useAccessControl.hooks";
import useRouter from "../../hooks/useRouter.hooks";

// import { CSSTransition } from "react-transition-group";

import PigGamePage from "./pigGamePage.component";
import {useDispatch, useSelector} from "react-redux";

const PigGamePageWithSpinner = () => {

  const dispatch = useDispatch();
  const {adminView} = useAccessControl();

  const router = useRouter();

  const isLoadingPiggame = useSelector(state => state.pigGame.isLoading);
  const ownedApps = useSelector(state => state.app.accessAppBtns);

  useEffect(() => {
    // Check if user can use this app
    if(ownedApps) {
      // 1) On refresh, wait for ownedApps to be populated and determine which path to redirect to
      // 2) may be move it to hooks to reuse on other application
      if(ownedApps.some(app => app.id === "5fb3e2c1f9fb435984ff8038") || adminView) {
        return;
      } else {
        router.push('/shop/todolist');
      }
    }
  }, [dispatch, ownedApps]);

  useEffect(() => {
    // Load Game State to pigGameReducer
      dispatch(loadPigGameStart());
  }, [dispatch]);

  return isLoadingPiggame ? (
    <S.Container className="w-screen h-screen">
      <S.Dice>
        <S.Face_front>
          <div></div>
        </S.Face_front>
        <S.Face_left>
          <div></div>
          <div></div>
          <div></div>
        </S.Face_left>
        <S.Face_right>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </S.Face_right>
        <S.Face_back>
          <div></div>
          <div></div>
        </S.Face_back>
      </S.Dice>
    </S.Container>
  ) : (
    <PigGamePage />
  );
};

export default PigGamePageWithSpinner;
