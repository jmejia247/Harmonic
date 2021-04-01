import { connect } from "react-redux";
import ListingItem from "./listing_item";
import { requestListing } from "../../actions/listing_actions";
import { requestReviews } from '../../actions/reviews_actions';

const mSTP = (state, ownProps) => {
  debugger
  return {
    listing: state.entities.listings[ownProps.match.params.listingId],
    reviews: state.reviews
  };
};

const mDTP = (dispatch, ownProps) => {
  // debugger
  return {
    requestListing: listingId => dispatch(requestListing(listingId)),
    requestReviews: () => dispatch(requestReviews())
  };
};

export default connect(mSTP, mDTP)(ListingItem);
