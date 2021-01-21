import React from 'react';
import { connect } from 'react-redux';
import sessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    return {
        errors: Object.values(state.errors),
        formType: 'login'
    };
};

const mDTp = (dispatch, ownProps) => {
    return {
        processForm: user => dispatch(login(user))
    };
};

export default connect(mSTP, mDTP)(sessionForm);
