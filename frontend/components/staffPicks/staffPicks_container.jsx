import { connect } from 'react-redux';
import StaffPicks from './staffPicks';

const mSTP = (state, ownProps) => {
  return {
    // listings: Object.values(state.user)
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    // fetchListings: () => dispatch(fetchListings())
  };
};

export default connect(mSTP, mDTP)(StaffPicks);
