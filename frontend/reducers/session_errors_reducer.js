import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
  REMOVE_ERRORS,
} from "../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign([], state);
    switch (action.type) {
      case RECEIVE_ERRORS:
        debugger
        return action.errors;
      case RECEIVE_CURRENT_USER:
        return [];
      case REMOVE_ERRORS:
        return [];
      default:
        return state;
    }
}

export default sessionErrorsReducer;
