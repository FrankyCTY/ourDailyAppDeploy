import styled from "styled-components";

const S = {};

S.Background = styled.section`
  background: url("/images/assets/footerBg.png") no-repeat;
  width: 100%;
  background-size: cover;
  background-position: bottom;
`;

S.Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;

S.Row = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(4px, 1fr));

  @media screen and (min-width: 1150px) {
    flex-basis: 40%;
    margin-left: auto;
  }
  @media screen and (min-width: 1600px) {
    flex-basis: 30%;
    margin-left: auto;
  }
`;

S.Column = styled.div``;

S.Group = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

S.ToolsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;

  @media screen and (min-width: 600px) {
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 1150px) {
    flex-basis: 50%;
  }
`;

S.DecoSpan = styled.span`
  font-size: 0.6rem;
  color: white;
  position: absolute;
  top: -1rem;
  left: 1.2rem;
  opacity: 0.6;

  @media screen and (min-width: 500px) {
    font-size: 0.9rem;
  }
`;

S.Logo = styled.div`
  width: 4rem;
  margin-right: 1rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 500px) {
    width: 8rem;
  }

  img {
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

S.LogoLink = styled.a`
  margin-right: 1rem;
  color: white;
  opacity: 0.6;
  cursor: pointer;
  margin-top: 1rem;

  transition: opacity 250ms ease-in;

  @media screen and (min-width: 500px) {
    font-size: 1.2rem;
  }

  &:hover {
    opacity: 1;
  }
`;

S.ColumnTitle = styled.span`
  font-weight: 700;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 500px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 600px) {
    font-size: 1.5rem;
  }
`;

S.Link = styled.a`
  background: 0;
  outline: 0;
  border: 0;
  color: white;
  opacity: 0.6;
  font-size: 0.8em;
  margin-top: 0.8rem;
  cursor: pointer;

  @media screen and (min-width: 500px) {
    font-size: 0.9rem;
  }

  transition: opacity 250ms ease-in;
  &:hover {
    opacity: 1;
  }
`;

export default S;
