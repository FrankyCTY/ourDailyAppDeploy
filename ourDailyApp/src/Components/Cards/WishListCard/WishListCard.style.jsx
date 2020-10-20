import styled, { css } from "styled-components";

/* ========================== Wishlist item card ========================== */

const S = {};

const textStyle = css`
  color: ${(props) => props.theme.wishListCard.cardText};
`;

S.CardWrapper = styled.div`
  position: relative;
  box-shadow: 2px 4px 40px rgba(19, 15, 235, 0.1);
  transition: box-shadow 0.4s ease-in-out;
  height: 320px;

  background: ${(props) => props.theme.wishListCard.cardBg};

  cursor: pointer;

  --borderRadius: 10px;
  border-radius: var(--borderRadius);

  &:hover {
    box-shadow: 0px 0px 0px 1px #ade1c7;
    border: 1px solid #ade1c7;
    transition: all linear 0.1s;
  }
`;

S.ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
`;

S.Image = styled.img`
  border-top-left-radius: var(--borderRadius);
  border-top-right-radius: var(--borderRadius);
`;

// ========== card-bottom-part ============
S.CardBottomWrapper = styled.div`
  padding: 0 1em;
  padding-top: 0.7em;
`;

S.ItemTitleText = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  ${textStyle}
`;

S.ItemCreatorText = styled.p`
  font-size: 0.9rem;
  color: var(--blue-light);
  ${textStyle}
`;

S.BtnAndPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3em;
`;

S.BtnAddToCart = styled.button`
  border: 0;
  font-size: 0.8rem;
  padding: 0.4em 1em;
  background: ${(props) => props.theme.wishListCard.cardBtn_bg};
  color: white;
  cursor: pointer;
  user-select: none;
`;

S.TotalPriceText = styled.span`
  font-weight: 700;
  font-size: 1.8rem;
  ${textStyle}
`;

S.PriceText = styled.span`
  margin-left: 0.1em;
`;

/* ====================== element - absolute ====================== */
S.IconHeart = styled.i`
  position: absolute;
  color: red;
  top: 5%;
  right: 5%;
  font-size: 1.2rem;
`;

export default S;
