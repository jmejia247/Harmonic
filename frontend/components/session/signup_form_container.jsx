import React from 'react';
import { connect } from 'react-redux';
import sessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    return {
        errors: Object.values(state.errors),
        formType: 'signup'
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
      processForm: (user) => dispatch(signup(user)),
      closeModal: () => dispatch(closeModal()),
      otherForm: (
        <button onClick={() => dispatch(openModal("login"))}>Login</button>
      ),
    };
};

export default connect(mSTP, mDTP)(sessionForm);
