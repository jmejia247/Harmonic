import React from 'react';
import {connect} from 'react-redux';
import reviewForm from './reviewForm';
import { closeModal } from "../../actions/modal_actions";
import {postReview, requestReviews} from '../../actions/reviews_actions';

const mSTP = (state, ownProps) => {
    return {
      formType: "Review",
      user: state.session.id,
      listing: state.entities.listings,
      email: state.session.email
    };
}

const mDTP = (state, ownProps) => {
    return {
      closeModal: () => dispatch(closeModal()),
      processForm: (review) => dispatch(postReview(review)),
    };
}

export default connect(mSTP, mDTP)(reviewForm);
