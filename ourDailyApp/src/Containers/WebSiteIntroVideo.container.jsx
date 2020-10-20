import React from "react";
import { useDispatch } from "react-redux";
import { WebsiteIntroVideo } from "../Components/Compound Components";
import { Player } from "../Components/Compound Components";

import { changeAuthPage } from "../redux/AuthPage/AuthPage.actions";
import useOnScreen from "../hooks/useShowScreen.hooks";

export default function WebSiteIntroVideoContainer() {
  const dispatch = useDispatch();
  const [setNode, startAnimate] = useOnScreen({ threshold: [0.2, 0.8] });

  return (
    <div ref={setNode}>
      <WebsiteIntroVideo
        className="gridCenterContent"
        style={{ padding: "0 25px" }}
      >
        <WebsiteIntroVideo.Container
          style={{
            gridColumn: "2",
          }}
        >
          <WebsiteIntroVideo.PreviewVideoFrame>
            <WebsiteIntroVideo.PreviewVideoImg src="/images/assets/introVideoPreview.png" />
            <Player>
              <Player.PlayVideoBtn />
              <Player.Video />
            </Player>
          </WebsiteIntroVideo.PreviewVideoFrame>

          <WebsiteIntroVideo.TextAndBtnWrapper>
            <WebsiteIntroVideo.Title
              startAnimate={startAnimate}
              fadeinfrom="X"
              fadedistance="20"
              style={{ opacity: 0 }}
            >
              Check out this video now to learn more
            </WebsiteIntroVideo.Title>
            <WebsiteIntroVideo.SignUpBtn
              to="/auth"
              onClick={() => {
                dispatch(changeAuthPage("signup"));
              }}
              startAnimate={startAnimate}
              fadeinfrom="Y"
              fadedistance="20"
              delay={400}
              style={{ opacity: 0 }}
            >
              Sign Up Now
            </WebsiteIntroVideo.SignUpBtn>
          </WebsiteIntroVideo.TextAndBtnWrapper>
        </WebsiteIntroVideo.Container>
      </WebsiteIntroVideo>
    </div>
  );
}
