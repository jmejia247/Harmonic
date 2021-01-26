import { connect } from 'react-redux';
import SearchBar from './searchBar';

const mSTP = (state, ownProps) => {
    return {
        filter: Object.values(state.ui)
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        processForm: filter => dispatch(fetchListings(filter))
    };
};

export default connect(mSTP, mDTP)(SearchBar);
