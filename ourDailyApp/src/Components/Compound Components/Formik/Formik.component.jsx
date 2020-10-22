import React, { useContext, useState } from "react";
import S from "./styles/Formik.style";
import "react-datepicker/dist/react-datepicker.css";
import {UploadAvatarContext} from "../../../context/uploadAvatar.context";
import {updateUserDetailsStart} from "../../../redux/User/user.actions";
import { format } from 'date-fns';
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

Formik.CustomCheckBox = function FormikCustomCheckBox({onClick, className, children, ...restProps }) {
    
    return (
        <div>
            <S.CustomCheckBox onClick={onClick} {...restProps} className={className}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
          <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
            </S.CustomCheckBox>
            <S.CheckBoxLabel onClick={onClick} className={className}>{children}</S.CheckBoxLabel>
        </div>
    )
}

Formik.SubmitBtn = function FormikSubmitBtn({formDetails, children, ...restProps}) {

    const dispatch = useDispatch();

    const {file, cropData} = useContext(UploadAvatarContext);

    const {name, email, bio, personalWebsite, gender, birthday} = formDetails;

    const onSubmit = (e) => {
       e.preventDefault();
       const formData = new FormData();

       // Combine the edited avatar file with the update user details
       // into formData and send back to bkEnd
    //    const newBirthday = format(new Date(birthday), 'dd/MM/yyyy');

       // Update avatar only if user changed it
       if(cropData) {
           formData.append('avatar', file);
           console.log("we have cropped data");
        }
       formData.append('name', name);
       formData.append('email', email);
       formData.append('bio', bio);
       formData.append('personalWebsite', personalWebsite);
       formData.append('gender', gender);
    //    formData.append('birthday', newBirthday);
       formData.append('birthday', birthday);

    //    console.log({birthday})
       console.log({gender})
        dispatch(updateUserDetailsStart(formData));
    }


    return <S.FormikSubmitBtn onClick={onSubmit} {...restProps}>{children}</S.FormikSubmitBtn>
}

Formik.AvatarContainer = function AvatarContainer({src, ...restProps}) {

    const {getInputProps, cropData} = useContext(UploadAvatarContext);

    return  <S.AvatarContainer {...restProps}>
                <S.Avatar src={cropData || src}/>
                <S.AvatarContainerDeco>
                    <S.UploadIcon className="iconfont icon-upload"/>Upload
                </S.AvatarContainerDeco>
                <S.UploadAvatarLabel htmlFor="avatar"></S.UploadAvatarLabel>
                <S.FormikInput id="avatar" name="avatar" type="file" className="hidden" {...getInputProps()} ></S.FormikInput>
            </S.AvatarContainer>
}