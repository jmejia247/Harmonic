import { combineReducers } from 'redux'
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';
import ReviewReducer from './reviews_reducer';

const RootReducer = combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
    entities: entitiesReducer,
    ui: uiReducer,
    reviews: ReviewReducer
});

export default RootReducer;
