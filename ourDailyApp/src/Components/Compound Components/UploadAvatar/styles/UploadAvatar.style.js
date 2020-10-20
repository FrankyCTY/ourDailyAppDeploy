import styled from "styled-components";

const S = {};

S.Container = styled.section`
  display: grid;
  grid-template-columns: 1fr minmax(1px, 1000px) 1fr;
  justify-content: center;
`;

S.Frame = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.PanelContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 90%;
  height: 200px;
  display: flex;
  flex-direction: column;

  max-width: 600px;
  margin-bottom: 0;
  position: relative;

  overflow: hidden;
`;

S.TabsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

S.TabsWrapperBorder = styled.div`
position: absolute;
width: 50%;
bottom: 0;
border-bottom: 2px solid #0059A6;
transition: all 100ms linear;
&.right {
  transform: translateX(100%);
}
`;

S.Tab = styled.div`
  background: 0;
  outline: 0;
  border: 0;
  color: white;
  flex-basis: 50%;
  cursor: pointer;
  padding: 0.4rem 0;
  text-align: center;
  font-size: .7rem;

  @media screen and (min-width: 550px) {
    font-size: 0.9rem;
  }
`;

S.Group = styled.div`
  display: grid;
  flex-basis: 100%;
  width: 100%;
  height: 100%;
`;

S.TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 90%;
  margin: 0 auto;

  margin-top: 1rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 700px) {
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 1000px) {
    margin-top: 2rem;
  }
  @media screen and (min-width: 1400px) {
    margin-top: 4rem;
  }
`;

S.FileInputLabel = styled.label`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: 0;
  font-size: 0.7rem;
  padding: 0.6em 1.2em;
  border: 2px solid white;
  cursor: pointer;

  transition: all 250ms ease-in;

  span {
    margin-right: 0.5rem;
    font-size: 1.8em;
  }

  &:hover {
    background: white;
    color: #303030;
  }
`;

// S.FileInput = styled.input`
//   display: none;
// `;

S.AvatarDisplay = styled.div`
  --size: 4rem;
  width: var(--size);
  height: var(--size);

  border-radius: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;

  @media screen and (min-width: 700px) {
    margin-bottom: 4rem;
    --size: 5rem;
  }
`;
S.AvatarImg = styled.img`
object-fit: cover;
height: 100%;
width: 100%;
border-radius: inherit;
`;

S.DefaultAvatarContainer = styled.div`
display: flex;
`;

S.DefaultAvatarImg = styled.img`
  --size: 5rem;
  width: var(--size);
  height: var(--size);
  background: 0;
  border-radius: 50%;
  cursor: pointer;

  &:first-of-type {
    margin-right: 3rem;
  }

  ${({active}) => {
    if(active) {
      return "filter: drop-shadow(0 0 0.75rem white);";
    }
  }}
`;

S.Title = styled.h1`
  color: white;
  font-weight: 300;
  font-size: 1.2em;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 1000px) {
    font-size: 1.5rem;
  }
`;

S.Text = styled.span`
  font-size: 0.8rem;
  color: white;

  @media screen and (min-width: 1000px) {
    font-size: 1rem;
  }
`;

S.UploadBtn = styled.button`
font-size: 0.6em;
border: 2px solid ${(props) => props.theme.SignUpForm.SignUpButton_border};
padding: 0.5em 2.4em;
align-self: center;
background: ${(props) => props.theme.SignUpForm.SignUpButton_bg};
color: ${(props) => props.theme.SignUpForm.SignUpButton_text};
outline: 0;
display: flex;
justify-content: space-between;

transition: opacity 250ms ease-in-out;

&:hover {
  opacity: 0.8;
}

margin-top: 2em;

font-weight: 700;

cursor: pointer;

& > * {
  margin-left: 0.5em;
}

@media screen and (min-width: 800px) {
  font-size: 0.9em;
}
`;

S.CropImageFrame = styled.div`
position: absolute;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
`;

S.CropImageContainer = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  background: #303030;
  padding: 1rem;
`;

S.CropImageDisplay = styled.div`
border-top: 3px solid #5E5E5E;
border-bottom: 3px solid #5E5E5E;
padding: 1rem 0;
`;

S.EditAvatarImg = styled.img`
`;

S.Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;


export default S;
