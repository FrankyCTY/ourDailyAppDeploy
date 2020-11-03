import styled, {css} from "styled-components";
import {Button, FormControl, Select} from "@material-ui/core";
import DatePicker from "react-datepicker";

const S = {};

const inputStyles = css`
border-radius: .25rem;
padding: .375rem .75rem;
font-weight: 400;
line-height: 1.429;
border: 1px solid ${({theme}) => theme.wrapper_border};
border-radius: .25rem;
transition border-color .15s ease-in-out, box-shadow .15s ease-in-out;
background: ${({theme}) => theme.secondary_bg};
color: ${({theme}) => theme.Formik.text_color};
font-size: 0.75rem;
width: 100%;

&:disabled {
    filter: brightness(.5);
}

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

const textStyles = css`
color: ${({theme}) => theme.general_text};
`

S.FormikForm = styled.form`

`;

S.FormikGroup = styled.div`
margin-bottom: 10px;
position: relative;

.react-datepicker,
.react-datepicker__header {
    background: ${({theme}) => theme.secondary_bg};
}
.react-datepicker__day {
    color: ${({theme}) => `${theme.Formik.text_color} !important`};
    &:hover {
        background: 0;
        outline: 1px solid #0059A6;
    }
}

.react-datepicker__day-name,
.react-datepicker__current-month {
    color: ${({theme}) => `${theme.Formik.text_color} !important`};
}
`;

S.FormikInput = styled.input`
${inputStyles}
padding-right: 50px;
`;

S.FormikInputDecoIcon = styled.span`
    position: absolute;
    right: 10px;
    bottom: 8%;
    color: ${({theme}) => theme.Formik.text_color};
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

S.FormikSubmitBtn = styled(Button)`
    background: ${({theme}) => theme.attract_color} !important;

    &:hover {
        filter: brightness(1.2);
    }

    &:disabled {
        background: gray !important;
        color: white !important;
    }
`;

S.CustomCheckBox = styled.span`
    --size: 1rem;
    display: inline-block;
    width: var(--size);
    height: var(--size);
    border-radius: 0.25em;
    border: 0.1em solid currentColor;
    margin-right: 1rem;

    svg {
        transition: transform 0.1s ease-in 25ms;
        transform: scale(0);
        transform-origin: bottom left;
        color: ${({theme}) => theme.general_text};
        transform: ${({checked}) => {
            if(checked) {
                return "scale(1);";
            } else {
                return "scale(0);";
            }
        }}
    }

    color: ${({theme}) => theme.general_text};
`;

S.CheckBoxLabel = styled.span`
user-select: none;
font-size: .9rem;
color: ${({theme}) => theme.general_text};
`;

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

S.FormSelectContainer = styled(FormControl)`
& span {
    font-size: 0.9rem;
    margin-right: .4rem;
}
& .MuiInputBase-root {
${textStyles};

}

& .MuiSelect-icon {
${textStyles};

}
.MuiInput-underline::before,
.MuiInput-underline:hover:not(.Mui-disabled)::before {
border-bottom: 0;
}

// Select Menu List
& 
`;

S.Select = styled(Select)`
`;



export default S;