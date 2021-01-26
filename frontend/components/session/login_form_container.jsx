import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, removeErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Login'
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        processForm: user => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        login: user => dispatch(login(user)),
        removeErrors: () => dispatch(removeErrors()),
        otherForm: (<h3 onClick={() => dispatch(openModal('signup'))} >Signup</h3>)
    };
};

export default connect(mSTP, mDTP)(SessionForm);
