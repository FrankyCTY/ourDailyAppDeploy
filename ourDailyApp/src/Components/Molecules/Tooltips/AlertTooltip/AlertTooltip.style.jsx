import styled from "styled-components";

const S = {};

S.AlertTooltip = styled.div`
    background: ${(props) => props.theme.FormInput.alert_bg};
    // border: 2px solid ${(props) => props.theme.FormInput.alert_border};
    padding: .5em 1em;
    color: white;
    z-index: 2;
    border-radius: 3px;
    font-size: .5em;

    box-shadow: 0 0 0 1px rgba(139, 3, 0, .75), 0 1px 10px rgba(0, 0, 0, .35);

    position: absolute;

    white-space: pre-line;

    pointer-events: none;

    @keyframes pops {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      animation: pops 250ms linear;

    &.top {
        right: 0;
        top: -80%;
    }

    &.right {
        left: 102%;
        
    }
}
`;

export default S;
