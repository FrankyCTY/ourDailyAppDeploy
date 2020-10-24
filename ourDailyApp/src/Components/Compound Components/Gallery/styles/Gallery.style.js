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

img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}
`;

export default S;