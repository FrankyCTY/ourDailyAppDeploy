import React, {createContext, useState, useCallback} from "react";
import bg from "../assets/images/uploadAvatarPage/default.jpg";
import maleAvatar from "../assets/images/uploadAvatarPage/male.png";
import femaleAvatar from "../assets/images/uploadAvatarPage/female.png";
import {useDispatch} from "react-redux";
import {updateUserAvatarStart} from "../redux/User/user.actions";

import {useDropzone} from "react-dropzone";


const UploadAvatarContext = createContext();
function UploadAvatarProvider({children}) {

  
  const dispatch = useDispatch();
  
  const [cropData, setCropData] = useState(null);
  const [editAvatar, setEditAvatar] = useState(null);
  const [imgName, setImgName] = useState("");
  const [file, setFile] = useState('');
  const [isEditAvatarPopped, setIsEditAvatarPopped] = useState(false);
  
  // # Handle Drag and Drop avatar
  const onDrop = useCallback(files => {
    console.log({file: files[0]}); // e.target.files[0]
    const reader = new FileReader();
    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')

    reader.onload = () => {
      // 1) Tranform file into base64 binary string
        const binaryStr = reader.result // base64
        // setImgUploaded(binaryStr);
        setEditAvatar(binaryStr);
      }
    reader.readAsDataURL(files[0]);

    
    // // 2) set image for uploading
    // setFile(files[0]);

    // 3) Open Edit Avatar Pop up
    setIsEditAvatarPopped(true);
    
  }, [])

  const {getRootProps, getInputProps} = useDropzone({onDrop, accept: 'image/jpeg, image/png', multiple: false});
  
  const onClickDefaultAvatar = (e) => {
    let imgSrc;
      setFile('');
      // For image preview
      switch(e.target.name) {
        case "male":
          imgSrc = maleAvatar;
          setFile(maleAvatar);
          setImgName("male");
          break;
        case "female":
          imgSrc = femaleAvatar;
          setFile(maleAvatar);
          setImgName("female");
          break;
        default:
          imgSrc = bg;
          setImgName("");
      }

      setCropData(imgSrc);
    }

    // # Handle submit avatar
    const onSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      // 1) Check if user uploading his own avatar or using my default avatars
      // It will lead to different work flow in backend
      imgName === "" ? formData.append('avatar', file) : formData.append('imgName', imgName);
      
      dispatch(updateUserAvatarStart(formData));
    }


    const closeEditAvatarPopUp = useCallback(() => {
      setIsEditAvatarPopped(false);
    }, []);


    return <UploadAvatarContext.Provider value={{cropData, setCropData, 
      onSubmit, setFile, file,
      onClickDefaultAvatar, getRootProps,
      getInputProps, isEditAvatarPopped, closeEditAvatarPopUp,
      imgName, setImgName, editAvatar}}>{children}</UploadAvatarContext.Provider>
}

export {UploadAvatarProvider, UploadAvatarContext};