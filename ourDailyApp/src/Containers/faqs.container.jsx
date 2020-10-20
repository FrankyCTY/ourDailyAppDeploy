import React from "react";
import { Accordion } from "../Components/Compound Components";
import { Decoration } from "../Components/Compound Components";
import faqsData from "../fixtures/faqs.json";

import useOnScreen from "../hooks/useShowScreen.hooks";

const FaqsContainer = () => {
  const [setNode, startAnimate] = useOnScreen({ threshold: [0.2, 0.8] });

  return (
    <div style={{ position: "relative", padding: "0 0 90px" }} ref={setNode}>
      <Accordion>
        <Accordion.Title
          startAnimate={startAnimate}
          fadeinfrom="Y"
          fadedistance="-20"
          delay={0}
          style={{ opacity: 0 }}
        >
          Fequently Asked Questions
        </Accordion.Title>
        <Accordion.Frame
          startAnimate={startAnimate}
          fadeinfrom="X"
          fadedistance="20"
          delay={400}
          style={{ opacity: 0 }}
        >
          {faqsData.map((item) => (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.BodyWrapper>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.BodyWrapper>
            </Accordion.Item>
          ))}
        </Accordion.Frame>

        <Accordion.Img
          src="/images/assets/accordionImg.png"
          alt="discussing"
          startAnimate={startAnimate}
          fadeinfrom="X"
          fadedistance="-20"
          delay={600}
          style={{ opacity: 0 }}
        />
      </Accordion>
      {/* <Decoration.DividerDivSkew
        direction={"to right bottom"}
        firstColor={"#303030"}
        secodColor={"#5e5e5e"}
      /> */}
      <Decoration.EditorialDivider bottomWaveColor={"#5E5E5E"} />
    </div>
  );
};

export default FaqsContainer;
