import { connect } from "react-redux";
import Listing from './listings';
import { requestListings } from '../../actions/listing_actions';

const mSTP = (state, ownProps) => {
  return {
    // listings: Object.values(state.listings)
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    requestListings: () => dispatch(requestListings())
  };
};

export default connect(mSTP, mDTP)(Listing);
