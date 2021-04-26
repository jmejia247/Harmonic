import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import SearchResult from './search_result'

const mSTP = (state, ownProps) => {
  return {
      results: state.ui.search
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(SearchResult);
