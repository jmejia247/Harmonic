import { connect } from 'react-redux';
import SearchBar from './searchBar';
import { fetch_search_results } from '../../actions/search_actions'
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    return {
      filter: Object.values(state.ui),
      modal: state.ui.modal,
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
      fetchResult: (query) => dispatch(fetch_search_results(query)),
      openModal: (modal) => dispatch(openModal(modal)),
      closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mSTP, mDTP)(SearchBar);
