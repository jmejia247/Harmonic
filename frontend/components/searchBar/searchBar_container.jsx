import { connect } from 'react-redux';
import SearchBar from './searchBar';

const mSTP = (state, ownProps) => {
    return {
        filters: Object.values(state.ui)
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        fetchListings: () => dispatch(fetchListings())
    };
};

export default connect(mSTP, mDTP)(SearchBar);
