// import React, { useState } from "react";
// import S from "./player2SignInModal.style";

// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import {
//   selectShowSignInModal,
//   selectSignInError,
//   selectIsProcessingSignIn,
// } from "../../../redux/pigGameModals/pigGameModals.selectors";
// import { signInFormOnHide } from "../../../redux/pigGameModals/pigGameModals.actions";
// import { signInStart } from "../../../redux/pigGamePlayer2/pigGamePlayer2.actions";
// // import { selectPlayer2UserInfo } from "../../../redux/pigGame/pigGame.selectors";

// import { Modal, Form } from "react-bootstrap";
// import FormInput from "../../../Components/formInput/formInput.component";

// import PropTypes from "prop-types";

// const Player2SignInModal = ({
//   showSignInModal,
//   signInErrorObj,
//   IsProcessingSignIn,
//   signInFormOnHide,
//   signInStart,
//   // player2UserInfo,}) => {
// }) => {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });

//   //  ================================= Custom Methods =================================

//   const handleInputChange = (event) => {
//     const { value, name } = event.target;

//     setCredentials({ [name]: value });
//   };

//   const { email, password } = credentials;
//   return (
//     <S.SignInModal show={showSignInModal} onHide={signInFormOnHide} centered>
//       <Modal.Header closeButton>
//         <S.ModalTitle>Player 2 Sign In</S.ModalTitle>
//       </Modal.Header>
//       <Modal.Body>
//         <Form className="signInForm">
//           <FormInput
//             id="pigGameSignInEmail"
//             labelText="Email address"
//             type="email"
//             name="email"
//             placeholder="Enter email"
//             handleInputChange={handleInputChange}
//             value={email}
//             errorObj={signInErrorObj.emailError}
//           />

//           <FormInput
//             id="pigGameSignInPassword"
//             labelText="Passwords"
//             type="password"
//             name="password"
//             placeholder="Password"
//             handleInputChange={handleInputChange}
//             value={password}
//             errorObj={signInErrorObj.passwordError}
//           />

//           <S.Button
//             variant="primary"
//             onClick={(e) => {
//               e.preventDefault();
//               console.log("Ready to signInStart");
//               signInStart(email, password);
//               // player2UserInfo !== null &&
//               //   this.setState({ email: "", password: "" });
//             }}
//           >
//             Player2 Log In
//             {IsProcessingSignIn && <S.Spinner></S.Spinner>}
//           </S.Button>
//         </Form>
//       </Modal.Body>
//     </S.SignInModal>
//   );
// };

// const mapStateToProps = createStructuredSelector({
//   showSignInModal: selectShowSignInModal,
//   signInErrorObj: selectSignInError,
//   IsProcessingSignIn: selectIsProcessingSignIn,
//   // player2UserInfo: selectPlayer2UserInfo,
// });

// const mapDispatchToProps = (dispatch) => ({
//   signInStart: (email, password) => dispatch(signInStart(email, password)),
//   signInFormOnHide: () => dispatch(signInFormOnHide()),
// });

// Player2SignInModal.propTypes = {
//   showSignInModal: PropTypes.bool.isRequired,
//   signInErrorObj: PropTypes.object.isRequired,
//   IsProcessingSignIn: PropTypes.bool.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Player2SignInModal);
