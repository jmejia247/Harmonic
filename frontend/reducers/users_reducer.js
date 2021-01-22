import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

const userReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.user.id] = action.user;
            return nextState;
        default:
            return state;
    };
};

export default userReducer;
