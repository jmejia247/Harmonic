import { connect } from 'react-redux';
import StaffPicks from './staffPicks';
import { requestListings } from "../../actions/listing_actions";

const mSTP = (state, ownProps) => {
  return {
    listings: Object.values(state.entities.listings)
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    requestListings: () => dispatch(requestListings())
  };
};

export default connect(mSTP, mDTP)(StaffPicks);
