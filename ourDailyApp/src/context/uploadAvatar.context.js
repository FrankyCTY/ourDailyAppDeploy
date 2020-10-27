import React, {createContext, useState, useCallback} from "react";
import bg from "../assets/images/uploadAvatarPage/default.jpg";
import maleAvatar from "../assets/images/uploadAvatarPage/male.png";
import femaleAvatar from "../assets/images/uploadAvatarPage/female.png";
import {useDispatch} from "react-redux";
import UserActions from "../redux/User/user.actions";

import b64toBlob from "../utils/b64toBlob";

import {useDropzone} from "react-dropzone";


const UploadAvatarContext = createContext();
function UploadAvatarProvider({children}) {

  
  const dispatch = useDispatch();
  
  const [cropper, setCropper] = useState();
  const [cropData, setCropData] = useState(null);
  const [editAvatar, setEditAvatar] = useState(null);
  // Image name for the default photo that we have in the file system
  // e.g. male.jpeg, female.jpeg
  const [imgName, setImgName] = useState("");
  const [file, setFile] = useState('');
  const [isEditAvatarPopped, setIsEditAvatarPopped] = useState(false);

  // For customizing background
  const [selectedBg, setSelectedBg] = useState({name: "", src: ""});
  

  // @desc Handle Drag and Drop avatar
  const onDrop = useCallback(files => {
    const imgFile = files[0] ;// e.target.files[0]
    const fileUrl = URL.createObjectURL(imgFile);
    setEditAvatar(fileUrl);
    
    // 2) Open Edit Avatar Pop up
    setIsEditAvatarPopped(true);
    
  }, [])


  const {getRootProps, getInputProps} = useDropzone({onDrop, accept: 'image/jpeg, image/png', multiple: false});

  // @desc apply to get cropped image data 
  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      // 1) Reset all uploaded data
      setImgName("");
      setSelectedBg({name: "", src: ""});

      // 2) set the cropped image data
      setCropData(cropper.getCroppedCanvas().toDataURL());
      const blob = b64toBlob(cropper.getCroppedCanvas().toDataURL());
      console.log({blob})
      setFile(blob);
    }
  }
  
  // @desc submit DEFAULT avatar
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

    // @desc Handle submit avatar
    const onSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      // 1) Check if user uploading his own avatar or using my default avatars
      // It will lead to different work flow in backend
      imgName === "" ? formData.append('avatar', file) : formData.append('imgName', imgName);
      
      dispatch(UserActions.updateUserAvatarStart(formData));
    }

    // @desc Handle Background update submit
    const onBackgroundSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      // 1) check if user uploaded bg or chose a default bg
      if(selectedBg.src !== "") {
        // default bg url
        formData.append("bgUrl", selectedBg.src);
      }
      else {
        // uploaded bg file
        formData.append("uploadedBg", file);
      }
      dispatch(UserActions.changeUserBackgroundStart(formData));
    }


    // closing the edit photo pop up
    const closeEditAvatarPopUp = useCallback(() => {
      setIsEditAvatarPopped(false);
    }, []);


    return <UploadAvatarContext.Provider value={{cropData, setCropData, 
      onSubmit, setFile, file,
      selectedBg, setSelectedBg, setCropper,
      getCropData, 
      onClickDefaultAvatar, getRootProps,
      getInputProps, isEditAvatarPopped, closeEditAvatarPopUp,
      onBackgroundSubmit,
      imgName, setImgName, editAvatar}}>{children}</UploadAvatarContext.Provider>
}

export {UploadAvatarProvider, UploadAvatarContext};