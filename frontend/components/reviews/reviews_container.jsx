import { connect } from "react-redux";
import Reviews from './reviews';
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
  return {
    user: Boolean(state.session.id),
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mSTP, mDTP)(Reviews);
