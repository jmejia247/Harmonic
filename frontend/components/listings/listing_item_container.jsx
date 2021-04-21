import { connect } from "react-redux";
import ListingItem from "./listing_item";
import { requestListing } from "../../actions/listing_actions";
import { requestReviews } from '../../actions/reviews_actions';
import { postCart } from '../../actions/cart_actions';
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
  debugger
  return {
    listing: state.entities.listings[ownProps.match.params.listingId],
    reviews: state.reviews,
    userId: state.session.id,
    user: Boolean(state.session.id),
  };
};

const mDTP = (dispatch, ownProps) => {
  // debugger
  return {
    requestListing: (listingId) => dispatch(requestListing(listingId)),
    requestReviews: () => dispatch(requestReviews()),
    cart: (cart) => dispatch(postCart(cart)),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mSTP, mDTP)(ListingItem);
