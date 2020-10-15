import React from "react";
import "./modal.css"

function Modal({ closeModalHandler, modal, showModal }) {
  return (
    <div className={`modal-overlay ${showModal && "modalActive"}`}>
      <div className="modal">
        <div
          className="modal__closeBtn"
          onClick={() => {
            closeModalHandler();
          }}
        >
          &times;
        </div>
        <div className="modal__body">
          <img
            className="modal__body__img"
            alt={modal[0].alt_description}
            src={modal[0].urls.raw}
          />

          <div className="modal__body__text">
            <p className="auto-name">{modal[0].user.name}</p>
            <p className="auto-location">{modal[0].user.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
