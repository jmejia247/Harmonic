// Session Actions
// Before we get to the reducer, let's write and export the following action 
// creators in a new file actions/session_actions.js:

// login(user) (thunk action creator)
// logout() (thunk action creator)
// signup(user) (thunk action creator)

// receiveCurrentUser(currentUser) (regular action creator)
// logoutCurrentUser() (regular action creator)
// receiveErrors(errors) (regular action creator)

// Don't forget to define and export the corresponding action types as well 
// (e.g., export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER').

// Neither logout nor logoutCurrentUser will accept an argument. receiveErrors 
// will take an array. All other action creators accept a user object.

import * as UserApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS"

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS
  }
}

export const signup = user => dispatch => {
  return (
    UserApiUtil.signup(user).then((user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))));
}

export const login = user => dispatch => {
  return (
    UserApiUtil.login(user).then((user) => dispatch(receiveCurrentUser(user)),(errors) => dispatch(receiveErrors(errors.responseJSON))));
}

export const logout = () => dispatch => {
  return (
    UserApiUtil.logout().then((user) => dispatch(logoutCurrentUser(user)),(errors) => dispatch(receiveErrors(errors.responseJSON))));
}
