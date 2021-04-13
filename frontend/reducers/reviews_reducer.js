import {
  RECIEVE_REVIEWS,
  RECIEVE_REVIEW,
  DELETE_REVIEW
} from "../actions/reviews_actions";

const ReviewReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
      case RECIEVE_REVIEWS:
            return action.reviews
      case RECIEVE_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState;
      case DELETE_REVIEW:
            console.log(nextState)
            nextState.filter(ele => ele.id !== action.id)
            return nextState
      default:
        return state;
    }
}

export default ReviewReducer;
