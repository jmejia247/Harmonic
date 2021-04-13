import { connect } from 'react-redux'
import updateForm from './updateForm'
import { updateReview } from '../../actions/reviews_actions'
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
  return {
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    updateReview: (review) => dispatch(updateReview(review)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(updateForm);
