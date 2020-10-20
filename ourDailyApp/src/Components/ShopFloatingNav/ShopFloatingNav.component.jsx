import React, { useEffect, useRef, useCallback } from "react";
import S from "./ShopFloatingNav.style";

import useRouter from "../../hooks/useRouter.hooks";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleShopNavHidden } from "../../redux/shopNav/shopNav.actions";
import { toggleCartPopUp } from "../../redux/cart/cart.actions";
import { selectHidden } from "../../redux/shopNav/shopNav.selectors";
import { selectCartItemsQuantity } from "../../redux/cart/cart.selectors";
import { closeShopNav } from "../../redux/shopNav/shopNav.actions";

const ShopNav = ({
  hidden,
  toggleHidden,
  itemQuantity,
  toggleCartPopUp,
  closeShopNav,
}) => {
  const node = useRef();

  const handleCloseShopNav = useCallback(
    (e) => {
      if (node.current.contains(e.target)) {
        return;
      }

      closeShopNav();
    },
    [closeShopNav]
  );

  useEffect(() => {
    if (hidden === false) {
      document.addEventListener("mousedown", handleCloseShopNav);
    }

    return () => {
      document.removeEventListener("mousedown", handleCloseShopNav);
    };
  }, [hidden, handleCloseShopNav]);

  const router = useRouter();

  return (
    <S.ShopNavWrapper className="shopNav" ref={node}>
      <S.ToggleContainer className="toggle-shopNav" onClick={toggleHidden}>
        <S.IconShop className="iconfont icon-shop"></S.IconShop>
      </S.ToggleContainer>
      {/* // ====================== In Opened Shop Nav ====================== */}
      <S.MenuContainer className="menu-wrapper">
        <S.MenuWrapper className={`${!hidden && "active"} shopNav-menu`}>
          <S.OptionCart
            className="option option--cart"
            onClick={() => {
              toggleCartPopUp();
              toggleHidden();
            }}
          >
            <S.Icon className="iconfont icon-cart">
              <S.CartItemsQuantityText className="cartItems-quantity">
                {itemQuantity}
              </S.CartItemsQuantityText>
            </S.Icon>
            <S.Text className="option-text">Cart</S.Text>
          </S.OptionCart>

          <S.OptionCheckout
            className="option option--checkout"
            onClick={() => {
              toggleHidden();
              router.push("/wishlist");
            }}
          >
            <S.Icon className="iconfont icon-wish"></S.Icon>
            <S.Text className="option-text">Wishlist</S.Text>
          </S.OptionCheckout>
        </S.MenuWrapper>
      </S.MenuContainer>
    </S.ShopNavWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectHidden,
  itemQuantity: selectCartItemsQuantity,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleShopNavHidden()),
  toggleCartPopUp: () => dispatch(toggleCartPopUp()),
  closeShopNav: () => dispatch(closeShopNav()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopNav);
