import styled, {css} from "styled-components";
import {Button} from "@material-ui/core";
import DatePicker from "react-datepicker";

const S = {};

const inputStyles = css`
border-radius: .25rem;
padding: .375rem .75rem;
font-weight: 400;
line-height: 1.429;
border: 1px solid ${({theme}) => theme.Formik.input_border};;
border-radius: .25rem;
transition border-color .15s ease-in-out, box-shadow .15s ease-in-out;
background: ${({theme}) => theme.Formik.input_background};
color: ${({theme}) => theme.Formik.text_color};
font-size: 0.75rem;

&:focus {
    border: 1px solid #5678af;
}

@media screen and (min-width: 768px) {
    font-size: 0.85rem;
}

@media screen and (min-width: 1200px) {
    font-size: 1rem;
}
`;

S.FormikForm = styled.form`

`;

S.FormikGroup = styled.div`
margin-bottom: 10px;

.react-datepicker,
.react-datepicker__header {
    background: ${({theme}) => theme.Formik.input_background};
}
.react-datepicker__day {
    color: white !important;
    &:hover {
        background: 0;
        outline: 1px solid #0059A6;
    }
}

.react-datepicker__day-name,
.react-datepicker__current-month {
    color: white !important;
}
`;

S.FormikInput = styled.input`
${inputStyles}
`;

S.FormikTextarea = styled.textarea`
${inputStyles}
`;

S.FormikSelect = styled.select`
${inputStyles}
`;

S.FormikDatePicker = styled(DatePicker)`
${inputStyles}
`;

S.FormikLabel = styled.label`
display: inline-block;
margin-bottom: .5rem;
color: ${({theme}) => theme.Formik.label_color};
font-size: 0.875rem;

@media screen and (min-width: 1200px) {
    font-size: 0.9rem;
}
`;

S.FormikSubmitBtn = styled(Button)``;

S.AvatarContainer = styled.div`
    --size: 6rem;
    height: var(--size);
    width: var(--size);
    border-radius: 100%;
    margin-bottom: 2rem;

    position: relative;
`;

S.AvatarContainerDeco = styled.div`
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

S.Avatar = styled.img`
width: 100%;
object-fit: cover;
border-radius: 100%;
`;

S.UploadAvatarLabel = styled.label`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background: 0;
border-radius: inherit;
cursor: pointer;
display: block;
`;


export default S;