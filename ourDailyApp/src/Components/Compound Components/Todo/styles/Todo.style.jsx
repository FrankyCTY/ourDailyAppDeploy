import styled, {css} from "styled-components";
import {ReactComponent as BackLogo} from '../../../../assets/svg/back.svg';
import {ReactComponent as ModifyLogo} from '../../../../assets/svg/modify.svg';
import {ReactComponent as PinLogo} from '../../../../assets/svg/pin.svg';
import {ReactComponent as BinLogo} from '../../../../assets/svg/bin.svg';

const textStyles = css`
  color: ${({theme}) => theme.general_text};
`;

const toolBoxSvgStyles = css`
  margin: ${({svgMargin}) => svgMargin};
  width: ${({svgSize}) => svgSize};
`;

const S = {};

S.TitleText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  ${textStyles};
`;

S.SubtitleText = styled.span`
  font-size: .8rem;
  ${textStyles};
`;

S.Text = styled.p`
  font-size: 0.7rem;
  color: ${({theme}) => theme.minor_text};
`;

S.ModifySvg = styled(ModifyLogo)`${toolBoxSvgStyles};`;
S.PinSvg = styled(PinLogo)`${toolBoxSvgStyles};`;
S.BinSvg = styled(BinLogo)`${toolBoxSvgStyles};`;

S.ToolBox = styled.div`
  display: flex;
  background: ${({theme}) => theme.minor_text};
  padding: .2rem .3rem;
  align-self: start;
  border-radius: 12px;

  & .modifySvg,
  & .pinSvg {
    fill: #848484;
  }

  ${({nobg, theme}) => {
    return nobg && `
      background: 0;
      & .modifySvg,
      & .pinSvg {
        fill: ${theme.minor_text};
      }
    `;
  }}
`;

S.Group = styled.div`
`;

S.TodoContainer = styled.div`
padding: 1rem 0.9rem 0;
background: ${({theme}) => theme.secondary_bg};
`;

S.MobileNav = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

S.TodoHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
${textStyles}
`;

S.TodoListItemBlock = styled.div`
  // border: 2px solid yellow;
  padding: 1rem;
  border-radius: 22px;
  cursor: pointer;

  ${({active, theme}) => {
    return active && `    
    background: ${theme.minor};
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
    p {
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
    }`;
  }}


`;

S.BackLogo = styled(BackLogo)`
  fill: ${({theme}) => theme.RouteBlock.prevRouteText};
  margin-right: .7rem;
`;

S.TagBox = styled.div`
display: inline-block;
padding: 6px 14px;
border-radius: 17px;
font-weight: 700;
letter-spacing: 2px;
background: ${({theme}) => theme.minor};
`;

S.NavText = styled.span`
color: ${({theme}) => theme.RouteBlock.prevRouteText};
font-size: 0.8rem;`;



export default S;