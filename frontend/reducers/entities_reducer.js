import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import listingsReducer from './listings_reducer';

const entitiesReducers = combineReducers({
    users: usersReducer,
    listings: listingsReducer
});

export default entitiesReducers;
