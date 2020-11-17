import React from "react";
import S from "./infoModal.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  turnInfoModalOff,
} from "../../../redux/pigGameModals/pigGameModals.actions";
import {Modal} from "react-bootstrap";
import { selectShowInfoModal } from "../../../redux/pigGameModals/pigGameModals.selectors";


const InfoModal = ({ showInfoModal, turnInfoModalOff }) => {
  return (
    <S.InfoModal
      show={showInfoModal}
      onHide={() => {
        turnInfoModalOff();
        
      }}
      centered
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      </style>
      <Modal.Header closeButton>
        <S.ModalTitle>Pig Game</S.ModalTitle>
      </Modal.Header>
      <Modal.Body>
        {/* ======================== Rules ======================== */}
        <S.SubHeader>RULES: </S.SubHeader>
        <p>
          Players take turn to roll dice,{" "}
          <span style={{ color: "orangered" }}>
            whoever first hit the target score wins.
          </span>
        </p>
        <p>
          Each round, the active player can roll as many times as he wants utill
          he taps the{" "}
          <span style={{ color: "#eb4d4d", fontWeight: "bold" }}>
            HOLD button.
          </span>
        </p>
        <p>
          If the player rolls two dices consecutively that add up to 8, then{" "}
          <span style={{ color: "#eb4d4d", fontWeight: "bold" }}>
            all the scores of him will back to 0 and
          </span>{" "}
          <span style={{ color: "#eb4d4d", fontWeight: "bold" }} className="mb-4">
            the other player will take turn.
          </span>
        </p>
        {/* ======================== Note ======================== */}
        <S.SubHeader className="mt-4">Note: </S.SubHeader>
        <p className="mb-4">The winner will be recorded only when the player 2 is logged in.</p>
        <S.Button variant="primary" onClick={turnInfoModalOff}>
          Nailed it
        </S.Button>
      </Modal.Body>
    </S.InfoModal>
  );
};

const mapStateToProps = createStructuredSelector({
  showInfoModal: selectShowInfoModal,
});

const mapDispatchToProps = (dispatch) => ({
  turnInfoModalOff: () => dispatch(turnInfoModalOff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoModal);
