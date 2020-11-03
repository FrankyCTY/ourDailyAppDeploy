import styled, {css} from "styled-components";
import {ReactComponent as BackLogo} from '../../../../assets/svg/back.svg';

const textStyles = css`
  color: ${({theme}) => theme.general_text};
`;

const S = {};

S.TitleText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

S.SubtitleText = styled.span`
  font-size: .8rem;
  ${textStyles};
`;

S.Text = styled.p`
  font-size: 0.7rem;
  color: ${({theme}) => theme.minor_text};
`;

S.Group = styled.div`
`;

S.ApplicationContainer = styled.div`
padding: 0 0.9rem`;

S.MobileNav = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
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

  &.active {
    background: ${({theme}) => theme.minor};
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  }
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