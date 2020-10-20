import React, {useState} from "react";
import { UploadAvatar } from "../../Components/Compound Components";
import { CSSTransition } from "react-transition-group";
import maleAvatar from "../../assets/images/uploadAvatarPage/male.png";
import femaleAvatar from "../../assets/images/uploadAvatarPage/female.png";

import "./UploadAvatar.scss";

function UploadAvatarContainer() {
  // state that indicates active tab is the left tab or not
  const [tabBorderOnLeft, setTabBorderOnLeft] = useState(true);

  return (
    <UploadAvatar>
      <UploadAvatar.Frame>
        <UploadAvatar.TextGroup>
          <UploadAvatar.Title>Upload a Profile Image</UploadAvatar.Title>
          <UploadAvatar.Text>
            Note that You have successfully signed up.
          </UploadAvatar.Text>
        </UploadAvatar.TextGroup>

        <UploadAvatar.AvatarDisplay />
        <UploadAvatar.PanelContainer>
          <UploadAvatar.TabsWrapper tabBorderOnLeft={tabBorderOnLeft}>
            <UploadAvatar.Tab onClick={() => {setTabBorderOnLeft(true)}}>
              Upload a photo
            </UploadAvatar.Tab>
            <UploadAvatar.Tab onClick={() => {
              setTabBorderOnLeft(false)}}>Customize Avatar</UploadAvatar.Tab>
          </UploadAvatar.TabsWrapper>
          <CSSTransition in={tabBorderOnLeft === true}
           timeout={300}
           classNames="tab-primary"
           unmountOnExit
           >
             <div className="tab">
                <UploadAvatar.UploadAvatarPanel/>
              </div>
          </CSSTransition>

          <CSSTransition in={tabBorderOnLeft === false}
           timeout={300}
           classNames="tab-secondary"
           unmountOnExit
           >
            <div className="tab">
              <UploadAvatar.Group className="target group"style={{ placeItems: "center" }}>
                <UploadAvatar.DefaultAvatarContainer>
                  <UploadAvatar.DefaultAvatarImg src={maleAvatar} alt="male avatar" name="male" />
                  <UploadAvatar.DefaultAvatarImg src={femaleAvatar} alt="female avatar" name="female" />
                </UploadAvatar.DefaultAvatarContainer>
              </UploadAvatar.Group>
            </div>
          </CSSTransition>
        </UploadAvatar.PanelContainer>


        <UploadAvatar.UploadBtn>Next</UploadAvatar.UploadBtn>
      </UploadAvatar.Frame>

      {/* Edit Avatar Pop up */}
      <UploadAvatar.CropImageContainer/>
    </UploadAvatar>
  );
}

export default UploadAvatarContainer;
