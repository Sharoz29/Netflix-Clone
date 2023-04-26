import React from "react";
import "./modal.css";

const Modal = ({ setOpenModal }) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <button
          className="close-button"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </button>
        <div className="modal-title">
          <h1>Modal</h1>
        </div>
        <div className="body">
          <p>Modal Body</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
