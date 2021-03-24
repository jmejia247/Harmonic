import { connect } from "react-redux";
import ListingItem from "./listing_item";
import { requestListing } from "../../actions/listing_actions";

const mSTP = (state, ownProps) => {
  debugger
  return {
    listing: state.entities.listings[ownProps.match.params.listingId]
  };
};

const mDTP = (dispatch, ownProps) => {
  // debugger
  return {
    requestListing: listingId => dispatch(requestListing(listingId))
  };
};

export default connect(mSTP, mDTP)(ListingItem);
