import React from "react";
import { ContentCounter } from "../Components/Compound Components";
import { Typography } from "../Components/Compound Components";
import { useMediaQuery } from "react-responsive";
import CountUp from "react-countup";
import useOnScreen from "../hooks/useShowScreen.hooks";

export default function CounterCounterSection() {

  const [setNode, startAnimate] = useOnScreen({
    threshold: [0.2, 0.8],
  });

  const width_above_550 = useMediaQuery({ query: "(min-width: 550px" });
  const width_above_1180 = useMediaQuery({ query: "(min-width: 1180px" });
  return (
    <section
      className="gridCenterContent"
      style={{
        padding: "106px 25px 90px",
        overflow: "hidden",
        position: "relative",
      }}
      ref={setNode}
    >
      <ContentCounter
        style={{
          gridColumn: "2",
        }}
      >
        <ContentCounter.CompanyWall
          fadeinFrom="X"
          fadedistance="-20"
          startAnimate={startAnimate}
          style={{ opacity: 0 }}
        >
          <ContentCounter.WallRowOne>
            <ContentCounter.WallImage src="/images/assets/linkedin.png" />
            <ContentCounter.WallImage src="/images/assets/facebook.png" />
            <ContentCounter.WallImage src="/images/assets/air-nz.png" />
            <ContentCounter.WallImage src="/images/assets/airbnb.png" />
            <ContentCounter.WallImage src="/images/assets/amazon.png" />
          </ContentCounter.WallRowOne>
          <ContentCounter.WallRowTwo>
            <ContentCounter.WallImage src="/images/assets/geo.png" />
            <ContentCounter.WallImage src="/images/assets/github.png" />
            <ContentCounter.WallImage src="/images/assets/jira.png" />
            <ContentCounter.WallImage src="/images/assets/lyft.png" />
          </ContentCounter.WallRowTwo>
          <ContentCounter.WallRowOne>
            <ContentCounter.WallImage src="/images/assets/microsoft.png" />
            <ContentCounter.WallImage src="/images/assets/myob.png" />
            <ContentCounter.WallImage src="/images/assets/redash.png" />
            <ContentCounter.WallImage src="/images/assets/salesforce.png" />
            <ContentCounter.WallImage src="/images/assets/serko.png" />
          </ContentCounter.WallRowOne>
          {width_above_550 && (
            <>
              <ContentCounter.WallRowTwo>
                <ContentCounter.WallImage src="/images/assets/slack.png" />
                <ContentCounter.WallImage src="/images/assets/linkedin.png" />
                <ContentCounter.WallImage src="/images/assets/survey-monkey.png" />
                <ContentCounter.WallImage src="/images/assets/todoist.png" />
              </ContentCounter.WallRowTwo>
              <ContentCounter.WallRowOne>
                <ContentCounter.WallImage src="/images/assets/transcribe-me.png" />
                <ContentCounter.WallImage src="/images/assets/twilio.png" />
                <ContentCounter.WallImage src="/images/assets/vend.png" />
                <ContentCounter.WallImage src="/images/assets/xero.png" />
                <ContentCounter.WallImage src="/images/assets/zendesk.png" />
              </ContentCounter.WallRowOne>
            </>
          )}
        </ContentCounter.CompanyWall>

        {width_above_1180 ? null : <ContentCounter.WallPlaceHolderDiv />}

        <ContentCounter.TextAndCardWrapper>
          <Typography.SectionSubtitle
            fadeinfrom="Y"
            fadedistance="-20"
            delay={200}
            startAnimate={startAnimate}
            style={{ opacity: 0 }}
          >
            This is my portfolio.
          </Typography.SectionSubtitle>
          <Typography.SectionTitle
            fadeinfrom="Y"
            fadedistance="-20"
            delay={200}
            startAnimate={startAnimate}
            style={{ opacity: 0 }}
          >
            Scroll down to view more details of me
          </Typography.SectionTitle>
          <Typography.SectionText
            startAnimate={startAnimate}
            fadeinfrom="X"
            fadedistance="20"
            delay={400}
            style={{ opacity: 0 }}
          >
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
          </Typography.SectionText>
          <ContentCounter.Card
            startAnimate={startAnimate}
            fadeinfrom="X"
            fadedistance="20"
            delay={400}
            style={{ opacity: 0 }}
          >
            <ContentCounter.CardPane>
              <ContentCounter.CardIcon className="iconfont icon-users" />
              <ContentCounter.CardNumber><CountUp start={0} end={20} delay={1} duration={5}/>K+</ContentCounter.CardNumber>
              <ContentCounter.CardName>DailyApp Users</ContentCounter.CardName>
            </ContentCounter.CardPane>
            <ContentCounter.CardPane>
              <ContentCounter.CardIcon className="iconfont icon-company" />
          <ContentCounter.CardNumber><CountUp start={0} end={10} delay={1} duration={5}/>K+</ContentCounter.CardNumber>
              <ContentCounter.CardName>Efforts</ContentCounter.CardName>
            </ContentCounter.CardPane>
          </ContentCounter.Card>
        </ContentCounter.TextAndCardWrapper>
      </ContentCounter>
    </section>
  );
}
