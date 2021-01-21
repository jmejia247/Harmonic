import { combineReducers } from 'redux';
import usersReducer from './users_reducer';

const entitiesReducers = combineReducers({
    users: usersReducer
});

export default entitiesReducers;
