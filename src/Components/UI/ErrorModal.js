import Button from "./Button";
import Modal from "react-modal";
import ReactDOM from "react-dom";
import React from "react";
Modal.setAppElement("#root");

const ModalOverlay = (props) => {
  return (
    <div>
      <Modal isOpen={props.boolean} onRequestClose={props.onClose}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <Button onClick={props.onClose}>Close</Button>
      </Modal>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay
          boolean={props.boolean}
          onClose={props.onClose}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("modalId")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
