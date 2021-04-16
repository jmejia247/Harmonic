import { combineReducers } from 'redux';
import modal from './modal_reducer';
import modalReducer from './modal_reducer';
import searchReducer from './search_reducer'

const uiReducer = combineReducers({
    modal: modalReducer,
    search: searchReducer
});

export default uiReducer;
