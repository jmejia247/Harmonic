import {
    RECEIVE_SEARCH_ERRORS,
    REMOVE_SEARCH_ERRORS,
    RECEIVESEARCHRESULTS
} from "../actions/search_actions";

const searchErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = Object.assign([], state);
  switch (action.type) {
    case RECEIVE_SEARCH_ERRORS:
      return action.errors;
    case RECEIVESEARCHRESULTS:
      return [];
    case REMOVE_SEARCH_ERRORS:
      return [];
    default:
      return state;
  }
};

export default searchErrorsReducer;
