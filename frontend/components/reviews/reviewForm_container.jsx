import React from 'react';
import {connect} from 'react-redux';
import reviewForm from './reviewForm';
import { closeModal } from "../../actions/modal_actions";
import {postReview} from '../../actions/reviews_actions';

const mSTP = (state, ownProps) => {
    return {
      formType: "Review",
      user: state.entities.users,
      listing: state.entities.listings,
    };
}

const mDTP = (state, ownProps) => {
    return {
      closeModal: () => dispatch(closeModal()),
      processForm: (review) => dispatch(postReview(review)),
    };
}

export default connect(mSTP, mDTP)(reviewForm);
