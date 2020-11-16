import React, { useEffect } from "react";
import S from "./cartPage.style";

import { updateRoutePath } from "../../redux/routePath/routePath.actions";
import {Todo} from "../../Components/Compound Components";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartItemsQuantity,
  selectCartItemsTotalPrice,
  selectWishListItems,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import useAccessControl from "../../hooks/useAccessControl.hooks";

import CartPageItemsBoard from "../../Components/ItemBoard/CartPageItemsBoard/CartPageItemsBoard.component";
import PaymentSection from "../../Components/PaymentSection/PaymentSection.component";

const CartPage = ({
  cartItems,
  cartItemsQuantity,
  totalPrice,
  wishlistItems,
  updateRoutePath,
}) => {
  useEffect(() => {
    updateRoutePath({
      page: "cart",
      details: {},
    });

    return () => {
      updateRoutePath({
        page: "",
        details: {},
      });
    };
  }, [updateRoutePath]);

  const {adminView} = useAccessControl();
  
  return (
    <S.CartPageContainer>
      {/* ========================== content main ========================== */}
      <S.ContentContainer className="gs-PageContentContainer">
        {adminView ? <div className="flex justify-center items-center w-screen h-full">
          <Todo.TitleText className="text-sm md:text-2xl">Admins have full access to every products</Todo.TitleText>
        </div>: <>
          <CartPageItemsBoard
            cartItems={cartItems}
            cartItemsQuantity={cartItemsQuantity}
            wishlistItems={wishlistItems}
          />
          <PaymentSection
          cartItemsQuantity={cartItemsQuantity}
          totalPrice={totalPrice}
          cartItems={cartItems}
          />
      </>
}

      </S.ContentContainer>
    </S.CartPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsQuantity: selectCartItemsQuantity,
  totalPrice: selectCartItemsTotalPrice,
  wishlistItems: selectWishListItems,
});

const mapDispatchToProps = (dispatch) => ({
  updateRoutePath: (routePathDetails) =>
    dispatch(updateRoutePath(routePathDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
