import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'signup'
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
      processForm: (user) => dispatch(signup(user)),
      closeModal: () => dispatch(closeModal()),
      openModal: (modal) => dispatch(openModal("login")),
      otherForm: (
        <button onClick={() => dispatch(openModal("login"))}>Login</button>
      ),
    };
};

export default connect(mSTP, mDTP)(SessionForm);
