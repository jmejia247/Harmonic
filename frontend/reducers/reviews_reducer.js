import {
  RECIEVE_REVIEWS,
  RECIEVE_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW
} from "../actions/reviews_actions";

const ReviewReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
//     console.log(action)
    switch (action.type) {
      case RECIEVE_REVIEWS:
            return action.reviews
      case RECIEVE_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState;
      case UPDATE_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState;            
      case DELETE_REVIEW:
            debugger
            delete nextState[action.reviewId.id];
            return nextState;
      default:
        return state;
    }
}

export default ReviewReducer;
