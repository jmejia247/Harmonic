import {
 RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER 
} from "../actions/session_actions";

const noUser = {
  id: null
};

const sessionReducer = (state = noUser, action) => {

  // debugger
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.user.id };
    case LOGOUT_CURRENT_USER:
      return noUser;
    default:
      return state;
  };
  
};

export default sessionReducer;
