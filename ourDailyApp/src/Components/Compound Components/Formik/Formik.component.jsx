import React, { useContext, useState } from "react";
import S from "./styles/Formik.style";

import {MenuItem} from "@material-ui/core";
import "react-datepicker/dist/react-datepicker.css";
import {UploadImageContext} from "../../../context/uploadAvatar.context";
import userActions from "../../../redux/User/user.actions";
import FormikUtils from "./Formik.utils";
import {useDispatch} from "react-redux";


export default function Formik({children, ...restProps}) { 
    return <S.FormikForm {...restProps}>{children}</S.FormikForm>
}

Formik.Input = function FormikInput({children, ...restProps}) {

    return <S.FormikInput {...restProps}>{children}</S.FormikInput>
}

Formik.Textarea = function FormikTextarea({children, ...restProps}) {
    return <S.FormikTextarea {...restProps}>{children}</S.FormikTextarea>
}

Formik.Select = function FormikSelect({children, ...restProps}) {
    return <S.FormikSelect {...restProps}>{children}</S.FormikSelect>
}

Formik.DatePicker = function FormikDatePicker({children, ...restProps}) {
    return <S.FormikDatePicker {...restProps}>
        {children}</S.FormikDatePicker>
}

Formik.Label = function FormikLabel({children, ...restProps}) {
    return <S.FormikLabel {...restProps}>{children}</S.FormikLabel>
}

Formik.PasswordInput = function FormikPasswordInput({htmlFor, children, ...restProps}) {

    const [isHidePassword, toggleIsHidePassword] = useState(true);

    const onEyeIconClick = () => {
        toggleIsHidePassword(!isHidePassword);
    }

    return     <Formik.Group>
        <Formik.Label htmlFor={htmlFor}>{children}</Formik.Label>
        <Formik.Input type={`${isHidePassword ? "password" : "text"}`} {...restProps}/>
        {
            isHidePassword ? <Formik.InputDecoIcon className="iconfont icon-eye1" onClick={onEyeIconClick}/>
            : <Formik.InputDecoIcon className="iconfont icon-eye" onClick={onEyeIconClick}/>
        }        
  </Formik.Group>
}

Formik.InputDecoIcon = function FormikInputDecoIcon({children, ...restProps}) {
    return <S.FormikInputDecoIcon {...restProps}>{children}</S.FormikInputDecoIcon>
}

Formik.Group = function FormikGroup({children, ...restProps}) {
    return <S.FormikGroup {...restProps}>{children}</S.FormikGroup>
}

Formik.CustomSubmitBtn = function FormikCustomSubmitBtn({children, ...restProps}) {
    return <S.FormikSubmitBtn {...restProps}>{children}</S.FormikSubmitBtn>
}

Formik.CancelBtn = function FormikCancelBtn({children, ...restProps}) {
    return <S.CancelBtn {...restProps}>{children}</S.CancelBtn>
}

// Sets

Formik.CustomCheckBox = function FormikCustomCheckBox({onClick, className, children, ...restProps }) {
    
    return (
        <div className="sm:flex sm:items-center">
            <S.CustomCheckBox onClick={onClick} {...restProps} className={className}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
          <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
            </S.CustomCheckBox>
            <S.CheckBoxLabel onClick={onClick} className={className}>{children}</S.CheckBoxLabel>
        </div>
    )
}

Formik.SubmitBtn = function FormikSubmitBtn({formDetails, children, operationType, ...restProps}) {

    const dispatch = useDispatch();

    const {file, cropData} = useContext(UploadImageContext);

    const onSubmit = (e) => {
       e.preventDefault();
       let formData = new FormData();

       // 1) Check the operationType to see what data to send
       switch (operationType) {
           case "changeProfile":
               formData = FormikUtils.SubmitProfileLogic(formDetails, formData, cropData, file);
                break;
            case "changeBackground":
                formData.append("background", formDetails.background);
                break;
           default:
               return alert("Please specify the operationType");
       }
        dispatch(userActions.updateUserDetailsStart(formData));
    }


    return <S.FormikSubmitBtn onClick={onSubmit} {...restProps}>{children}</S.FormikSubmitBtn>
}

Formik.AvatarContainer = function AvatarContainer({src, ...restProps}) {

    const {getInputProps, cropData} = useContext(UploadImageContext);

    return  <S.AvatarContainer {...restProps}>
                <S.Avatar src={cropData || src}/>
                <S.AvatarContainerDeco>
                    <S.UploadIcon className="iconfont icon-upload"/>Upload
                </S.AvatarContainerDeco>
                <S.UploadAvatarLabel htmlFor="avatar"></S.UploadAvatarLabel>
                <S.FormikInput id="avatar" name="avatar" type="file" className="hidden" {...getInputProps()} ></S.FormikInput>
            </S.AvatarContainer>
}

Formik.DropDown = function DropDown({src, ...restProps}) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    //   className={classes.formControl}
    return (
    <S.FormSelectContainer>
        <S.Select
        value={age}
        onChange={handleChange}
        displayEmpty
        // className={classes.selectEmpty}
        inputProps={{ 'aria-label': 'Without label' }}
    >
            <MenuItem value="">
            <span>Recent</span>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </S.Select>
    </S.FormSelectContainer>
    )
}

Formik.InputGroup = function InputGroup({labelText, htmlFor, disabled, value, onChange, children, ...restProps}) {
    return (
        <Formik.Group>
            <Formik.Label htmlFor={htmlFor}>{labelText}</Formik.Label>
            <Formik.Group>
                <Formik.Input disabled={disabled} value={value} onChange={onChange} {...restProps}></Formik.Input>
            </Formik.Group>
        </Formik.Group>
    )
}