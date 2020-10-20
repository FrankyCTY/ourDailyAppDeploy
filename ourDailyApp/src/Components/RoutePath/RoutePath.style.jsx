import styled from "styled-components";

const S = {};

S.RouteContainer = styled.div`
  font-size: clamp(0.8rem, 1.4vw, 1.4rem);
`;

S.RouteText = styled.p`
  color: ${(props) => props.theme.RouteBlock.prevRouteText};
  display: flex;
  align-items: center;
  font-weight: 300;
  letter-spacing: 0.02em;
  margin-left: 2vw;
  margin-top: 1vw;
`;

// =================== selectPage === "shop" ======================
S.Icon = styled.i`
  font-size: clamp(0.8rem, 1.5vw, 1.5rem);
  // font-weight: 700;
  margin-left: 0.2em;
`;

// =================== selectPage === "applicationDetails" ======================
S.PrevLink = styled.span`
  cursor: pointer;
  padding: 0.2em 0.4em;
  &:hover {
    background: white;
    border-radius: 10px;
  }
`;

S.CurrentLoc = styled.span`
  color: ${(props) => props.theme.RouteBlock.currentRouteText};
`;

export default S;
