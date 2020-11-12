import styled, {css} from "styled-components";
import {ReactComponent as BackLogo} from '../../../../assets/svg/back.svg';
import {ReactComponent as ModifyLogo} from '../../../../assets/svg/modify.svg';
import {ReactComponent as PinLogo} from '../../../../assets/svg/pin.svg';
import {ReactComponent as BinLogo} from '../../../../assets/svg/bin.svg';
import {ReactComponent as ReturnLogo} from '../../../../assets/svg/return.svg';
import {ReactComponent as CollectionLogo} from '../../../../assets/svg/collection.svg';
import {ReactComponent as CollectionSingleLogo} from '../../../../assets/svg/collection single.svg';

const textStyles = css`
  color: ${({theme}) => theme.general_text};
`;

const toolBoxSvgStyles = css`
  margin: ${({svgmargin}) => svgmargin};
  width: ${({svgsize}) => svgsize};
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;

const pairButtonStyles = css`
  fill: ${({theme}) => theme.minor};
  color: ${({theme}) => theme.minor};
`;

const attractBtnStyles = css`
background: ${({theme}) => theme.attract_color};
outline: 0;
color: white;
&:hover {
  filter: brightness(1.2);
}
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

S.AttractText = styled.span`
  font-size: 0.7rem;
  color: ${({theme}) => theme.attract_color};
  cursor: pointer;
`;

S.ModifySvg = styled(ModifyLogo)`${toolBoxSvgStyles};`;
S.PinSvg = styled(PinLogo)`${toolBoxSvgStyles};`;
S.BinSvg = styled(BinLogo)`${toolBoxSvgStyles};`;
S.SearchSvg = styled.i`
  margin-right: 1rem;
  font-size: 1.5rem;
  ${textStyles};
`;
S.CollectionSvgBig = styled(CollectionLogo)`
  ${pairButtonStyles};
  ${toolBoxSvgStyles};
`;

S.ToolBox = styled.div`
  display: flex;
  background: ${({theme}) => theme.minor_text};
  padding: .2rem .3rem;
  align-items: start;
  align-content: start;
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

S.SideBarDropdown = styled.div`
  & .icon-play {
    ${({isExpanded}) => {
      if(isExpanded) {
        return "transform: rotate(90deg);";
      } else {
        return "transform: rotate(0deg);";
      }
    }}
  }
`;

S.SearchInput = styled.input`
  background: 0;
  font-size: .8rem;
  color: ${({theme}) => theme.minor_text};
`;

S.TodoContainer = styled.div`
padding: 1rem 0.9rem 0;
background: ${({theme}) => theme.secondary_bg};
min-height: 100vh;
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
position: relative;
${textStyles}
`;

S.CheckIndicator = styled.div`
--size: 1.5rem;
display: grid;
font-size: .7rem;
place-items: center;
width: var(--size);
height: var(--size);
border-radius: 100%;
right: 8px;
top: 10%;
position: absolute;
background: ${({theme}) => theme.attract_color};
color: ${({theme}) => theme.general_text};
`;

S.CheckSvg = styled.i`
color: ${({theme}) => theme.general_text};
`;

S.TodoListItemBlock = styled.div`
  padding: 1rem;
  border-radius: 22px;
  cursor: pointer;
  margin-bottom: .5rem;
  position: relative;
  ${({checkMode, theme}) => {
    return checkMode && `border: 1px solid ${theme.general_text};`
  }}

  ${({active, theme}) => {
    return active && `    
    background: ${theme.minor};
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
    p {
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
    }`;
  }}

  ${({active, theme}) => {
    if(!active) {
      return `
        &:hover {
          background: ${theme.minor};
          filter: brightness(1.2);
        }
      `;
    }
  }}}
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

S.AddTodoBtn = styled.button`
${attractBtnStyles};
border-radius: 100%;
width: 2rem;
height: 2rem;

position: absolute;
right: 0;
top: 5px;
& i {
  color: white;
}
`;

S.PairButton = styled.div`
  cursor: pointer;
  padding: .4rem;
  padding-left: 1rem;
  position: relative;
  &.active {
    background: ${({theme}) => theme.secondary_bg};
  }
  &:hover {
    filter: brightness(1.2);
  }

  @media screen and (min-width: 550px) {
    padding: .8rem;
    padding-left: 2.8rem;
  }
`;

S.PairButtonText = styled.span`
  ${pairButtonStyles};
  font-size: .7rem;

  @media screen and (min-width: 550px) {
    font-size: .9rem;
  }
`;

S.ArrowIcon = styled.i`
${pairButtonStyles};
font-size: 0.4rem;
position: absolute;
left: 0rem;

@media screen and (min-width: 550px) {
  left: 1rem;
  font-size: 0.7rem;
}
`;

S.ReturnSvg = styled(ReturnLogo)`
  ${pairButtonStyles};
  width: 1.2rem;

  @media screen and (min-width: 550px) {
    width: initial;
  }
`;
S.CollectionSingleLogo = styled(CollectionSingleLogo)`
  ${pairButtonStyles};
  width: 1.2rem;

  @media screen and (min-width: 550px) {
    width: initial;
  }
`;
S.CollectionSvg = styled(CollectionLogo)`
  ${pairButtonStyles};
  width: 1.2rem;

  @media screen and (min-width: 550px) {
    width: 1.8rem;
  }
`;

S.CreateCollectionBtn = styled.button`
  ${attractBtnStyles};
  font-size: .6rem;
  border-radius: 12px;
  padding: .5rem 1.2rem;

  @media screen and (min-width: 550px) {
    font-size: .8rem;
    padding: .8rem 1.5rem;
  }
`;

S.TodoSideBarOverLay = styled.div`
height: 100vh;
width: 100vw;
background: rgba(0,0,0,0.7);
z-index: 10;
position: fixed;
left: 0;
top: 0;
transition: opacity 250ms ease-in-out;
opacity: 0;
pointer-events: none;

${({showSideBar}) => {
  if(showSideBar) return "opacity: 1; pointer-events: auto;";
}}

`;

S.TodoSideBarContainer = styled.div`
  height: 100vh;
  min-width: 180px;
  background: ${({theme}) => theme.body};
  position: absolute;
  padding-top: 71px;
  padding-right: 1px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  user-select: none;
  transition: transform 250ms ease-in-out;
  transform: translateX(-100%);
  z-index: 10;

  ${({showSideBar}) => {
    if(showSideBar) return "transform: translateX(0);";
  }}

  @media screen and (min-width: 550px) {
    min-width: 270px;
  }

  @media screen and (min-width: 1280px) {
    position: initial;
    transform: translateX(0);
    box-shadow: initial;
  }
`;




export default S;