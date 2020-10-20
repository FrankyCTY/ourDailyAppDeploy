import React from "react";
import S from "./CommentsConverterPage.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  inputOnChange,
  setVideoIdInput,
  setStep2ToFalse,
  setStep2ToTrue,
} from "../../redux/commentsConverter/commentsConverter.actions";
import {
  selectVideoIdInputValue,
  selectStep2Show,
} from "../../redux/commentsConverter/commentsConverter.selectors";

// import { Form } from "react-bootstrap";

const CommentsConverterPage = ({
  videoIdInputValue,
  step2Show,
  inputOnChange,
  setVideoIdInput,
  setStep2ToFalse,
  setStep2ToTrue,
}) => (
  <S.PageContainer className="commentsConverter-page gs-PageContentContainer">
    {/* ====================================== Introduction ====================================== */}
    <S.IntroContainer className="introduction">
      {/* ============= intro left ============= */}
      <S.IntroLeftWrapper className="intro-left">
        <S.PageTitleText className="pageTitle">
          YouTube Comments To PNG Converter
        </S.PageTitleText>
        <div className="img-wrapper">
          <S.ImgCamera
            src="https://i.imgur.com/j9rSZOk.png"
            alt="a camera between the hands"
            className="img--camera"
          />
        </div>
        <h3>Features: </h3>
        <S.FeatureList className="feature-list">
          <li>Unlimited Comments allowed</li>
          <li>Customized border radius</li>
          <li>ZIP file for download</li>
          <li>Comments content is the PNG file name</li>
        </S.FeatureList>
      </S.IntroLeftWrapper>

      {/* ============= intro right ============= */}
      <S.IntroRightWrapper className="intro-right">
        <S.VideoWrapper className="video-wrapper">
          <S.Video
            src="https://player.vimeo.com/video/416381401"
            frameBorder="0"
            className="youtubeVideo"
            title="youtube video"
            allowFullScreen
          ></S.Video>
        </S.VideoWrapper>
        <S.ImgExampleWrapper>
          <S.ImgExample
            className="copy-example"
            src="https://i.imgur.com/l0owWvo.gif"
            alt=""
          />
        </S.ImgExampleWrapper>

        <p>
          This converter is developed by Franky Chan, it can capture all the
          comments of a youtube video and convert them into PNG file.
        </p>
      </S.IntroRightWrapper>
      <S.hr />
    </S.IntroContainer>

    {/* ====================================== implementation ====================================== */}
    <S.ImplementationWrapper className="implementation">
      <p>
        Example:{" "}
        <S.BtnExample
          className="exampleButton"
          onClick={() => setVideoIdInput("gCxsW2DXK0Y")}
        >
          gCxsW2DXK0Y
        </S.BtnExample>
      </p>
      {/* <S.Form>
        <Form.Control
          className="input--videoId"
          type="text"
          placeholder="Step1: Paste the video ID"
          aria-label="step1"
          data-id="videoIdInputValue"
          value={videoIdInputValue}
          onChange={(event) => {
            inputOnChange(event.target.value, event.target.dataset.id);
            if (step2Show === true && event.target.value === "")
              setStep2ToFalse();
            if (step2Show === false && event.target.value !== "")
              setStep2ToTrue();
          }}
        />
      </S.Form> */}

      {step2Show && (
        <S.BtnStep2 className="btn--step2">Step2: Get Comments</S.BtnStep2>
      )}
    </S.ImplementationWrapper>
  </S.PageContainer>
);

const mapStateToProps = createStructuredSelector({
  videoIdInputValue: selectVideoIdInputValue,
  step2Show: selectStep2Show,
});

const mapDispatchToProps = (dispatch) => ({
  inputOnChange: (value, target) => dispatch(inputOnChange(value, target)),
  setStep2ToTrue: (targetValue) => dispatch(setStep2ToTrue(targetValue)),
  setStep2ToFalse: (targetValue) => dispatch(setStep2ToFalse(targetValue)),
  setVideoIdInput: (value) => dispatch(setVideoIdInput(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsConverterPage);
