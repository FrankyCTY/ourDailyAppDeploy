import React, { useEffect } from "react";
import S from "./wishlistPage.style";

import { updateRoutePath } from "../../redux/routePath/routePath.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectWishListItems } from "../../redux/cart/cart.selectors";
import {
  toggleWishListItem,
  moveToCartList,
} from "../../redux/cart/cart.actions";
import { useMediaQuery } from "react-responsive";

import DetailedItemBlock from "../../Components/DetailedItemBlock/DetailedItemBlock.component";
import WishListCard from "../../Components/Cards/WishListCard/WishListCard.component";

const WishlistPage = ({ wishlist, updateRoutePath }) => {
  useEffect(() => {
    updateRoutePath({
      page: "wishlist",
      details: {},
    });

    return () => {
      updateRoutePath({
        page: "",
        details: {},
      });
    };
  }, [updateRoutePath]);

  const widthMin850 = useMediaQuery({ query: `(min-device-width: 850px)` });

  return (
    <S.PageContainer className="js_PageContainer">
      {/* ========================== content main ========================== */}
      <S.ContentContainer className="wishlist-content-main gs-PageContentContainer">
        {widthMin850 ? (
          <S.WishlistMIN850>
            {wishlist !== null &&
              wishlist.length > 0 &&
              wishlist.map((wishlistItem, index) => (
                <WishListCard wishlistItem={wishlistItem} key={index} />
              ))}
          </S.WishlistMIN850>
        ) : (
          <S.WishlistMAX849 className="wishlist-max849">
            {wishlist !== null &&
              wishlist.map((wishlistItem, index) => (
                <DetailedItemBlock
                  id={wishlistItem.id}
                  cartItem={wishlistItem}
                  itemType="wishlist"
                  animationAppendTo=".js_PageContainer"
                  key={index}
                />
              ))}
          </S.WishlistMAX849>
        )}
      </S.ContentContainer>
      {/* =============== Render 3: EMPTY wishlist ================= */}
      {wishlist.length === 0 && (
        <S.EmptyWishlistContainer className="empty-wishlist-wrapper">
          <h1 className="animate-bounce"> You have an empty wishlist</h1>
          <i className="iconfont icon-Empty animate-bounce"></i>
        </S.EmptyWishlistContainer>
      )}
    </S.PageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  wishlist: selectWishListItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleWishListItem: (item) => dispatch(toggleWishListItem(item)),
  moveItemToCartList: (item) => dispatch(moveToCartList(item)),
  updateRoutePath: (routePathDetails) =>
    dispatch(updateRoutePath(routePathDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WishlistPage);
