import { connect } from "react-redux";
import Reviews from './reviews';
import { openModal } from "../../actions/modal_actions";
import { deleteReview } from '../../actions/reviews_actions'

const mSTP = (state, ownProps) => {
  return {
    user: Boolean(state.session.id),
    userId: state.session.id
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
  };
};

export default connect(mSTP, mDTP)(Reviews);
