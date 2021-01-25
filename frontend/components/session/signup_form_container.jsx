import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Signup'
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
      processForm: (user) => dispatch(signup(user)),
      closeModal: () => dispatch(closeModal()),
      otherForm: (
        <h3 onClick={() => dispatch(openModal("login"))}>Login</h3>
      ),
    };
};

export default connect(mSTP, mDTP)(SessionForm);
