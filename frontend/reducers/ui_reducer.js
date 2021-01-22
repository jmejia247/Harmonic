import { combineReducers } from 'redux';
import modal from './modal_reducer';
import modalReducer from './modal_reducer';

const uiReducer = combineReducers({
    modal: modalReducer
});

export default uiReducer;
