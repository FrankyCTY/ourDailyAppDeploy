import styled from "styled-components";
import { Modal, Button, Form } from "react-bootstrap";

const S = {};

S.SignInModal = styled(Modal)``;

S.ModalTitle = styled(Modal.Title)`
  font-size: clamp(1.2rem, 1.4vw, 1.4rem);
`;

S.ModalFooter = styled(Modal.Footer)`
  @media screen and (max-width: 450px) {
    display: flex;
    justify-content: center;
  }
`;

S.Button = styled(Button)`
  font-size: clamp(0.8rem, 1vw, 1rem);
  display: flex;
  align-items: center;
`;

S.IconGoogle = styled.i`
  margin-right: 0.4rem;
  font-size: clamp(0.8rem, 1vw, 1rem);
`;

S.FormText = styled(Form.Text)`
  color: red;
  font-size: clamp(0.7rem, 1vw, 1rem);
`;

S.Spinner = styled.div`
  display: inline-block;
  font-size: clamp(0.8rem, 1vw, 1rem);
  width: 1em;
  height: 1em;
  border: 1px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 0.8s linear infinite;
  margin-left: 0.4em;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export default S;
