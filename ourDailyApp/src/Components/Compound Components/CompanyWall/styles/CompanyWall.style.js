import styled from "styled-components";

const S = {};

S.Container = styled.div`
  width: 600px;
  margin: 0 auto;
  position: absolute;
  //   top: 50%;
  left: 50%;
  transform: translate(-50%, 0);

  @media screen and (min-width: 515px) {
    width: 600px;
  }
`;

S.RowOne = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 84px);
  column-gap: 30px;
  justify-content: center;
`;

S.RowTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 84px);
  justify-content: center;
  column-gap: 30px;

  width: 80%;
  margin: 0 auto;
`;

S.Image = styled.img`
  max-width: 84px;
`;

S.PlaceHolderDiv = styled.div`
  width: 320px;
  height: 330px;

  @media screen and (min-width: 550px) {
    height: 520px;
  }
`;

export default S;
