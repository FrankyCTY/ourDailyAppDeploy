import styled from "styled-components";

const S = {};

S.GalleryContainer = styled.div`
@media screen and (min-width: 1280px) {
    width: 120%;
}
`;

S.GalleryItemWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, 100px);
grid-auto-rows: 100px;
margin: 0 auto;
place-content: center;
align-content: start;
width: 100vw;
position: absolute;
left: 0;
padding: 0 10%;
padding-bottom: 10%;

&::-webkit-scrollbar {
    width: 1em;
}
 
&::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
 
&::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
  border-radius: 10px;
  outline: 0;
}

@media screen and (min-width: 475px) {
    grid-template-columns: repeat(auto-fill, 178px);
    grid-auto-rows: 178px;
}
@media screen and (min-width: 1280px) {
    position: initial;
    width: 100%;
    padding: 0;
    max-height: 647px;
    justify-content: start;
    overflow: auto;
}
`;

S.GalleryItem = styled.div`
width: 100%;
height: 100%;
border: 1px solid gray;
border-radius: 5px;
position: relative;

cursor: pointer;

color: rgba(255, 255, 255, 0);

img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

${({isSelected}) => {
    if(isSelected) {
        return `padding: .6rem;
        background: #dae7f8;
        img {
            box-shadow: 0 0 5px 5px rgba(0, 0, 0, .2);
        }
    
        @media screen and (min-width: 475px) {
            padding: 1rem;
        }`
    }
}}
`;

S.ItemTag = styled.div`
background: #35569A;
color: ${({theme}) => theme.general_text};
position: absolute;
bottom: 0;
left: 0;
font-size: .4rem;
padding: 2px 4px;
transform: translateY(100%);
border-radius: 3px;

@media screen and (min-width: 475px) {
    font-size: .6rem;
    padding: 3px 6px;
}
@media screen and (min-width: 1280px) {
    font-size: .6rem;
    padding: 3px 6px;
}
`;

S.SelectedCircle = styled.div`
background: #35569A;
--size: 1.5rem;
width: var(--size);
height: var(--size);
border-radius: 50%;
display: grid;
place-items: center;
position: absolute;
right: 0;
top: 0;
transform: translate(-40%, 40%);
`;

S.SelectedIcon = styled.i`
    color: white;
`;

S.UploadImgGridItem = styled.div`
    position: relative;
`;

S.ImageInput = styled.input`
padding-right: 50px;
`;
S.UploadImgDeco = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background: rgba(0, 0, 0, .3);
border-radius: inherit;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 0.8rem;
color: white;
`;

S.UploadIcon = styled.span`
color: white;
font-size: 1.4rem;
`;

S.Label = styled.label`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background: 0;
border-radius: inherit;
cursor: pointer;
display: block;
border: 1px solid white;
`;

export default S;