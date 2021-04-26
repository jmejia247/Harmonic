import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import SearchResult from './search_result'

const mSTP = (state, ownProps) => {
  debugger;
  return {
      results: state.ui.search
  };
};

const mDTP = (dispatch, ownProps) => {
  // debugger
  return {

  };
};

export default connect(mSTP, mDTP)(SearchResult);
