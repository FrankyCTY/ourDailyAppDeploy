import React, {useContext} from "react";
import ReactDOM from "react-dom";
import PixelSpinner from "../../Molecules/Spinners/PixelSpinner/PixelSpinner.component";
import Button from '@material-ui/core/Button';
import bg from "../../../assets/images/uploadAvatarPage/default.jpg";
import {useSelector} from "react-redux";

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import b64toBlob from "../../../utils/b64toBlob";


import {UploadAvatarProvider, UploadAvatarContext} from "../../../context/uploadAvatar.context";
import S from "./styles/UploadAvatar.style";

export default function UploadAvatar({ children, ...restProps }) {
  return <UploadAvatarProvider><S.Container {...restProps}>{children}</S.Container></UploadAvatarProvider>;
}

UploadAvatar.Frame = function Frame({ children, ...restProps }) {
  return <S.Frame {...restProps}>{children}</S.Frame>;
};

UploadAvatar.Group = function Group({ children, ...restProps }) {
  return <S.Group {...restProps}>{children}</S.Group>;
};

UploadAvatar.TextGroup = function TextGroup({ children, ...restProps }) {
  return <S.TextGroup {...restProps}>{children}</S.TextGroup>;
};

UploadAvatar.PanelContainer = function PanelContainer({
  children,
  ...restProps
}) {
  return <S.PanelContainer {...restProps}>{children}</S.PanelContainer>;
};

UploadAvatar.TabsWrapper = function TabsWrapper({ tabBorderOnLeft, children, ...restProps }) {
  return <S.TabsWrapper {...restProps}><S.TabsWrapperBorder className={tabBorderOnLeft ? "left": "right"}/>{children}</S.TabsWrapper>;
};


UploadAvatar.Tab = function Tab({ children, ...restProps }) {
  return <S.Tab {...restProps}>{children}</S.Tab>;
};

UploadAvatar.FileInputLabel = function FileInputLabel({
  children,
  ...restProps
}) {
  return <S.FileInputLabel {...restProps}>{children}</S.FileInputLabel>;
};

UploadAvatar.FileInput = function FileInput({ children, ...restProps }) {
  const { onUploadImgHandler } = useContext(UploadAvatarContext);

  return (
    <S.FileInput {...restProps} onChange={onUploadImgHandler} name="avatar" type="file">
      {children}
    </S.FileInput>
  );
};

UploadAvatar.AvatarDisplay = function AvatarDisplay({
  children,
  ...restProps
}) {
  const { cropData } = useContext(UploadAvatarContext);

  return <S.AvatarDisplay {...restProps}><S.AvatarImg  src={cropData || bg}></S.AvatarImg>{children}</S.AvatarDisplay>;
};

// Pop up container
UploadAvatar.CropImageContainer = function CropImageContainer({
  children,
  ...restProps
}) {
  const { editAvatar, isEditAvatarPopped, closeEditAvatarPopUp, setCropData, setFile } = useContext(UploadAvatarContext);

  const [cropper, setCropper] = React.useState();

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
      const blob = b64toBlob(cropper.getCroppedCanvas().toDataURL());
      setFile(blob);
    }
  }


  return isEditAvatarPopped ? ReactDOM.createPortal(<S.CropImageFrame>
    <S.CropImageContainer>
      <S.Title className="text-xl">Edit avatar</S.Title>
      <S.CropImageDisplay {...restProps}>
        <Cropper src={editAvatar || bg} initialAspectRatio={1}
        viewMode={1}
        guides={true}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        background={false}
        responsive={true}
        autoCropArea={1}
        checkOrientation={false}
        onInitialized={(instance) => {
          setCropper(instance);
        }} style={{ height: 400, width: "100%" }} />
      </S.CropImageDisplay>
      <div className="flex mt-4">
        <Button variant="contained" className="mr-2 ml-auto text-gray-700" onClick={closeEditAvatarPopUp}>Cancel</Button>
        <Button variant="contained" className="text-gray-200" style={{background: "#0059A6"}}
        onClick={() => {
          getCropData();
          closeEditAvatarPopUp();
        }}>Apply</Button>
      </div>
    </S.CropImageContainer >
    <S.Overlay onClick={closeEditAvatarPopUp}/>
   </S.CropImageFrame>, document.body) : null;
}


UploadAvatar.DefaultAvatarContainer = function DefaultAvatarContainer({
  children, ...restProps
}) {
  return <S.DefaultAvatarContainer {...restProps}>{children}</S.DefaultAvatarContainer>
}

UploadAvatar.DefaultAvatarImg = function DefaultAvatarImg({
  name, ...restProps
}) {
  const {onClickDefaultAvatar, imgName} = useContext(UploadAvatarContext);
  return <S.DefaultAvatarImg active={imgName === name} name={name} onClick={onClickDefaultAvatar} {...restProps} />
}


UploadAvatar.Title = function Title({ children, ...restProps }) {
  return <S.Title {...restProps}>{children}</S.Title>;
};

UploadAvatar.Text = function Text({ children, ...restProps }) {
  return <S.Text {...restProps}>{children}</S.Text>;
};

UploadAvatar.UploadBtn = function UploadBtn({children, ...restProps}) {
  const isUploadingAvatar = useSelector((state) => state.user.isUploadingAvatar);
  const { onSubmit } = useContext(UploadAvatarContext);

  return <S.UploadBtn {...restProps} onClick={onSubmit}>{children}{isUploadingAvatar && <PixelSpinner size={1.2} animationDuration={1500}  style={{transform: "translateY(2px)"}}/>}</S.UploadBtn>
}

UploadAvatar.UploadAvatarPanel = function UploadAvatarPanel({children, ...restProps}) {

  const {getRootProps, getInputProps} = useContext(UploadAvatarContext);

  return <UploadAvatar.Group style={{ placeItems: "center" }} {...getRootProps()}>
        <UploadAvatar.FileInputLabel htmlFor="avatarInput">
          <span className="iconfont icon-round-add_photo_alte" />
          Upload Image
        </UploadAvatar.FileInputLabel>
        <input
          className="hidden"
          {...getInputProps({id: "avatarInput",
          name: "avatar",
          accept: "image/png, image/jpeg"})}
        ></input>
    </UploadAvatar.Group>
    
}
