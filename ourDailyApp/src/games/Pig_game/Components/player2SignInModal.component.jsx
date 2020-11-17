import React, { useState } from "react";
import S from "./player2SignInModal.style";

import { connect } from "react-redux";
import {useDispatch} from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectShowSignInModal,
  selectSignInError,
  selectIsProcessingSignIn,
} from "../../../redux/pigGameModals/pigGameModals.selectors";
import { turnSignInModalOff } from "../../../redux/pigGameModals/pigGameModals.actions";
import { signInStart } from "../../../redux/pigGamePlayer2/pigGamePlayer2.actions";

import { Modal, Form } from "react-bootstrap";
import {Formik} from "../../../Components/Compound Components";
import PropTypes from "prop-types";

const Player2SignInModal = ({
  showSignInModal,
  IsProcessingSignIn,
  turnSignInModalOff,
}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //  ================================= Custom Methods =================================

  const handleInputChange = (event, callbk) => {
    const { value } = event.target;
    callbk(value);
  };

  return (
    <S.SignInModal show={showSignInModal} onHide={turnSignInModalOff} centered>
      <Modal.Header closeButton>
        <S.ModalTitle>Player 2 Sign In</S.ModalTitle>
      </Modal.Header>
      <Modal.Body>
        <Form className="signInForm">

          {/* Email */}
          <Formik.InputGroup htmlFor="email" labelText="E-mail" 
          value={email} 
          onChange={(e) => handleInputChange(e, setEmail)} className="w-full bg-white text-black" 
          labelClassName="text-black"
          type="text" id="email" name="email"/>

          <Formik.InputGroup htmlFor="password" labelText="Password" 
          value={password} 
          onChange={(e) => handleInputChange(e, setPassword)} className="w-full bg-white text-black" 
          labelClassName="text-black"
          type="text" id="password" name="password"/>

          {/* <Formik.PasswordInput htmlFor="password"
          value={password} id="password" name="password" onChange={handleInputChange}
          className="bg-white text-black"
          labelClassName="text-black"
          >Password</Formik.PasswordInput> */}

          <S.Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              dispatch(signInStart(email, password));
            }}
            className="mt-4"
          >
            Player2 Log In
            {IsProcessingSignIn && <S.Spinner></S.Spinner>}
          </S.Button>
        </Form>
      </Modal.Body>
    </S.SignInModal>
  );
};

const mapStateToProps = createStructuredSelector({
  showSignInModal: selectShowSignInModal,
  signInErrorObj: selectSignInError,
  IsProcessingSignIn: selectIsProcessingSignIn,
});

const mapDispatchToProps = (dispatch) => ({
  turnSignInModalOff: () => dispatch(turnSignInModalOff()),
});

Player2SignInModal.propTypes = {
  showSignInModal: PropTypes.bool.isRequired,
  signInErrorObj: PropTypes.object.isRequired,
  IsProcessingSignIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player2SignInModal);
