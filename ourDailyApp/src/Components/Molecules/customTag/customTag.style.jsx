import styled from "styled-components";

const S = {};

S.CustomTagWrapper = styled.div`
  display: inline-block;
  padding: 0.5em 1em;
  border-radius: 4px;

  color: white;
  font-weight: 700;
  font-size: clamp(0.8rem, 1vw, 1rem);
  letter-spacing: 1.2px;

  margin-right: 0.8em;
  margin-top: 0.6em;
  background: ${({tagContent}) => {
    switch(tagContent) {
      case "javascript":
        return "orangered";
        case "html":
        return "limegreen";
        default: 
        return "orange"
    }
  }};
`;

export default S;
