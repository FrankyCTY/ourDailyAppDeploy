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

@media screen and (min-width: 475px) {
    grid-template-columns: repeat(auto-fill, 178px);
    grid-auto-rows: 178px;
}
@media screen and (min-width: 1280px) {
    position: initial;
    width: 100%;
    padding: 0;
    max-height: 647px;
    overflow-y: auto;
    justify-content: start;
}
`;

S.GalleryItem = styled.div`
width: 100%;
height: 100%;
border: 1px solid gray;
border-radius: 5px;

cursor: pointer;

img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

&.selected {
    padding: .6rem;
    background: #dae7f8;
    img {
        box-shadow: 0 0 5px 5px rgba(0, 0, 0, .2);
    }

    @media screen and (min-width: 475px) {
        padding: 1rem;
    }
}
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