import React from "react";
import { Jumbotron } from "../Components/Compound Components";
import { Typography } from "../Components/Compound Components";
import jumboData from "../fixtures/jumbo.json";

import useOnScreen from "../hooks/useShowScreen.hooks";

export default function JumbotronContainer() {
  const [setNode, startAnimate] = useOnScreen({ threshold: [0.2, 0.8] });
  return (
    <div ref={setNode}>
      <Typography.SectionSubtitle className=""
        style={{
          display: "block",
          textAlign: "center",
          marginBottom: "4rem",
        }}
      >
        View my other projects
      </Typography.SectionSubtitle>
      <Jumbotron.Container className="gridCenterContent homeSectionPadding">
        {jumboData.map((item) => (
          <Jumbotron
            className="Jumbotron"
            key={item.id}
            direction={item.direction}
            style={{
              gridColumn: "2",
              // padding: "15px 25px 15px",
              zIndex: "2",
              position: "relative",
            }}
          >
            <Jumbotron.TextPane>
              <Jumbotron.Title
                startAnimate={startAnimate}
                fadeinfrom="Y"
                fadedistance="-20"
                delay={400}
                style={{ opacity: 0 }}
              >
                {item.title}
              </Jumbotron.Title>
              <Jumbotron.SubTitle
                startAnimate={startAnimate}
                fadeinfrom="Y"
                fadedistance="-20"
                delay={400}
                style={{ opacity: 0 }}
              >
                {item.subTitle}
              </Jumbotron.SubTitle>
              <Jumbotron.linkBtn
                style={{ opacity: 0 }}
                fadeinfrom="X"
                fadedistance="20"
                delay={600}
                startAnimate={startAnimate}
              >
                To Website
              </Jumbotron.linkBtn>
            </Jumbotron.TextPane>
            <Jumbotron.ImagePane
              startAnimate={startAnimate}
              style={{ opacity: 0 }}
              fadeinfrom="Y"
              fadedistance="20"
            >
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.ImagePane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
      <Jumbotron.EndingSpan>And More...</Jumbotron.EndingSpan>
    </div>
  );
}
