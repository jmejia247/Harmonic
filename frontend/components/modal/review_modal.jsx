import React from "react";
import { closeModal, openModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import ReviewFormContainer from "../reviews/reviewForm_container";
import UpdateFormContainer from '../reviews/updateForm_container'

function ReviewModal({ modal, closeModal, openModal, listing, user, review }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "createReview":
      component = <ReviewFormContainer id={listing} userId={user}/>;
      break;
    case 'updateReview':
      component = <UpdateFormContainer review={review}/>;
      break;
    default:
      return null;
  }

  const formType =
    modal === "createReview" ? (
      <h1>Create A Review</h1>
    ) : (
      <h1>Update Review</h1>
    );

  return (
    <div className="review-modal-background" onClick={closeModal}>
      <div className="review-modal-child" onClick={(e) => e.stopPropagation()}>
        <section className="review-modal-heading">
          {formType}
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
