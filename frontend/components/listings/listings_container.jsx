import { connect } from "react-redux";
import Listing from './listings';
import { requestListing } from '../../actions/listing_actions';

const mSTP = (state, ownProps) => {
  return {
    // listing: state.entities.listings[ownProps.number]
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    // requestListing: listingId => dispatch(requestListing(listingId))
  };
};

export default connect(mSTP, mDTP)(Listing);
