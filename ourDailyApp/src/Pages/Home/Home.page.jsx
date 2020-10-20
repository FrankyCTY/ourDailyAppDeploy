import React, {useEffect} from "react";
import "./Home.style.scss";

import { useDispatch } from "react-redux";
import HomeHeaderContainer from "../../Containers/HomeHeader.container";
import JumbotronContainer from "../../Containers/Jumbotron.container";
import CounterCounterSection from "../../Containers/ContentCounterSection.container";
import WebSiteIntroVideoContainer from "../../Containers/WebSiteIntroVideo.container";
import AboutMeContainer from "../../Containers/AboutMe.container";
import FaqsContainer from "../../Containers/faqs.container";
import HomeFooterContainer from "../../Containers/HomeFooter.container";

import {hideNavUIComponents} from "../../redux/UIComponents/uiComponents.actions"

import { HomePageProvider } from "../../context/homePage.context";

export default function HomePage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideNavUIComponents());
  }, [dispatch]);

  return (
    <>
      <HomePageProvider>
        <HomeHeaderContainer />
        <CounterCounterSection />
        <WebSiteIntroVideoContainer />
        <AboutMeContainer />
        <FaqsContainer />
        <section
          className="relative"
          style={{
            background: "#5F5F5F",
            padding: "106px 25px 90px",
          }}
        >
          <JumbotronContainer />
          <div className="float-circle-small"></div>
          <div className="float-circle-small"></div>
          <div className="float-circle-small"></div>
          <div className="float-circle-small"></div>
          <div className="float-circle-big float-circle-big--1"></div>
          <div className="float-circle-big float-circle-big--2"></div>
        </section>
        <HomeFooterContainer />
      </HomePageProvider>
    </>
  );
}
