import React from "react";

import useRouter from "../../hooks/useRouter.hooks";
import { useDispatch, useSelector, connect } from "react-redux";

import { toggleNavHidden, closeNav } from "../../redux/nav/nav.actions";
import { toggleCartPopUp, closeCartPopUp } from "../../redux/cart/cart.actions";
import { selectCartItemsQuantity } from "../../redux/cart/cart.selectors";
import {signOutStart} from "../../redux/Auth/auth.actions";
import S from "./Header.style";
import { createStructuredSelector } from "reselect";
import useAccessControl from "../../hooks/useAccessControl.hooks";
import Tooltip from "@material-ui/core/Tooltip";

const Header = ({cartItemsQuantity}) => {
  const navHidden = useSelector((state) => state.nav.hidden);
  const theme = useSelector(state => state.theme_P.theme);

  const dispatch = useDispatch();

  const {isLogged, adminView} = useAccessControl();

  const router = useRouter();

  return (
    <S.HeaderContainer className="header">
      <S.HeaderNavContainer>
        {/* ====================== Logo ====================== */}
        <S.LogoWrapper>
          <img
            className="logo"
            src={`${theme !== "light" ? "/images/assets/logo_white_small.png" : "/images/assets/logo_small.png"}`}
            alt=""
            role="presentation"
            onClick={() => {
              dispatch(closeNav());
              router.push("/main");
            }}
          />
        </S.LogoWrapper>

        {/* ============================== Nav List ================================= */}
          
        <S.NavListContainer>
          {/* ====================== Admin Console ====================== */}
          {adminView && <Tooltip title="Admin Console">
            <S.LogoutIcon className="iconfont icon-realocksecure"></S.LogoutIcon>
          </Tooltip>}
          {/* ====================== Setting Icon ====================== */}
          {
            isLogged && 
            <Tooltip title="Settings">
              <S.LogoutIcon className="iconfont icon-t" onClick={() => router.push("/settings")}></S.LogoutIcon>
            </Tooltip>
          }
          {/* ====================== Cart Icon ====================== */}
         { isLogged && <Tooltip title="Cart Preview">
           <S.CartIconWrapper
            className="cart-icon-wrapper"
            onClick={() => {
              dispatch(toggleCartPopUp());
              dispatch(closeNav());
            }}
          >
            <S.CartIcon className="iconfont icon-cart1"></S.CartIcon>
            {/* ====================== Cart Icon -- > 1 notification ====================== */}
            {cartItemsQuantity !== 0 && (
              <S.CartItemsQuantityContainer className="cartItems-quantity-container">
                <S.CartItemsQuantityText className="cartItems-quantity-text">
                  {cartItemsQuantity}
                </S.CartItemsQuantityText>
              </S.CartItemsQuantityContainer>
            )}
          </S.CartIconWrapper>
          </Tooltip>}

          {/* ====================== SVG btn -> Float Nav ====================== */}

          <Tooltip title="Navigation Menu">
            <S.NavIconContainer
              className={`${navHidden ? "" : "active"} svg-wrapper Component`}
              onClick={() => {
                dispatch(closeCartPopUp());
                dispatch(toggleNavHidden());
              }}
            >
              <S.NavIcon className="svg" />
            </S.NavIconContainer>
          </Tooltip>

          {/* ====================== Logout btn ====================== */}
          <Tooltip title="Log Out">
            {isLogged && <S.LogoutBtnContainer onClick={() => {
              dispatch(closeCartPopUp());
              dispatch(closeNav());
              dispatch(signOutStart());
            }}>
              <S.LogoutIcon className="iconfont icon-log-out"></S.LogoutIcon>
            </S.LogoutBtnContainer>}
          </Tooltip>

        </S.NavListContainer>
      </S.HeaderNavContainer>
    </S.HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemsQuantity: selectCartItemsQuantity
})

export default connect(mapStateToProps)(Header);
