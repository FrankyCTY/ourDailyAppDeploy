import styled from "styled-components";

const S = {};

// ========== Container =========

S.MainPageAccessAppWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding: 0 8%;

  font-size: clamp(0.7rem, 1vw, 1rem);
  --btn-size: 7em;

  justify-content: center;

  grid-template-columns: repeat(auto-fit, var(--btn-size));
  grid-auto-rows: var(--btn-size);
  row-gap: 1em;
  column-gap: 0.6em;
`;

export default S;
