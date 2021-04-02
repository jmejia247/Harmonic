import React from "react";
import { closeModal, openModal } from "../../actions/modal_actions";
import { connect } from "react-redux";

function ReviewModal({ modal, closeModal, openModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "createReview":
      component = <p>work in progress</p>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        <section className="modal-heading">
          <h1>create a review</h1>
        </section>
        {component}
      </div>
    </div>
  );
}

const mSTP = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mSTP, mDTP)(ReviewModal);
