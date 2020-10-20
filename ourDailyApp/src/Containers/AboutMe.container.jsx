import React from "react";
import { AboutMe } from "../Components/Compound Components/";
import { Typography } from "../Components/Compound Components/";
import { Decoration } from "../Components/Compound Components/";

import useOnScreen from "../hooks/useShowScreen.hooks";

const AboutMeContainer = () => {
  const [setNode, startAnimate] = useOnScreen({ threshold: [0.2, 0.8] });

  return (
    <div style={{ position: "relative" }} ref={setNode}>
      <AboutMe
        className="gridCenterContent"
        style={{ padding: "106px 25px 90px" }}
      >
        <AboutMe.Container style={{ gridColumn: "2", marginTop: "80px" }}>
          <AboutMe.TextWrapper>
            <Typography.SectionSubtitle
              startAnimate={startAnimate}
              fadeinfrom="Y"
              fadedistance="20"
              delay={400}
              style={{ opacity: 0 }}
            >
              A business card about me.
            </Typography.SectionSubtitle>
            <Typography.SectionTitle
              startAnimate={startAnimate}
              fadeinfrom="Y"
              fadedistance="20"
              delay={400}
              style={{ opacity: 0 }}
            >
              Click the buttons on the card
            </Typography.SectionTitle>
            <AboutMe.Text
              startAnimate={startAnimate}
              fadeinfrom="Y"
              fadedistance="20"
              delay={400}
              style={{ opacity: 0 }}
            >
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </AboutMe.Text>
          </AboutMe.TextWrapper>
          <AboutMe.Card
            startAnimate={startAnimate}
            fadeinfrom="Y"
            fadedistance="20"
            style={{ opacity: 0 }}
          >
            <AboutMe.WorkingManImg />
          </AboutMe.Card>
        </AboutMe.Container>
      </AboutMe>
      <Decoration.EditorialDivider bottomWaveColor={"#303030"} />
    </div>
  );
};

export default AboutMeContainer;
