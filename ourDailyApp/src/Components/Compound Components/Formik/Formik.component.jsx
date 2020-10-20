import React, { useContext } from "react";
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
    return <S.FormikDatePicker {...restProps} dateFormat="dd/MM/yyyy">
        {children}</S.FormikDatePicker>
}

Formik.Label = function FormikLabel({children, ...restProps}) {
    return <S.FormikLabel {...restProps}>{children}</S.FormikLabel>
}

Formik.Group = function FormikGroup({children, ...restProps}) {
    return <S.FormikGroup {...restProps}>{children}</S.FormikGroup>
}

Formik.SubmitBtn = function FormikSubmitBtn({formDetails, children, ...restProps}) {

    const dispatch = useDispatch();

    const {file, cropData} = useContext(UploadAvatarContext);

    const {name, email, bio, personalWebsite, gender, birthday, isAvatarChanged} = formDetails;

    const onSubmit = (e) => {
       e.preventDefault();
       const formData = new FormData();

       // Combine the edited avatar file with the update user details
       // into formData and send back to bkEnd
       const newBirthday = format(new Date(birthday), 'dd/MM/yyyy');

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
       formData.append('birthday', newBirthday);

       console.log({birthday})
       console.log({gender})
        dispatch(updateUserDetailsStart(formData));
    }


    return <S.FormikSubmitBtn {...restProps} onClick={onSubmit}>{children}</S.FormikSubmitBtn>
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