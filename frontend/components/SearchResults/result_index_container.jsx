import { connect } from "react-redux";
import ResultIndex from './result_index'

const mSTP = (state, ownProps) => {
  return {
      cartItems: Object.values(state.ui.search)
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
  };
};

export default connect(mSTP, mDTP)(ResultIndex);
