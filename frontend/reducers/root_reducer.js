import { combineReducers } from 'redux'
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';
import ReviewReducer from './reviews_reducer';
import CartReducer from './cart_reducer';

const RootReducer = combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
    entities: entitiesReducer,
    ui: uiReducer,
    reviews: ReviewReducer,
    cart: CartReducer
});

export default RootReducer;
