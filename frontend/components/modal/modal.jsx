import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";

function Modal({modal, closeModal, openModal, user}) {

    const sessionForm = (
      <section className="modal-heading">
        <h1
          className={modal === "signup" ? "selected-form" : "nonselected-form"}
          onClick={() => openModal("signup")}
        >
          Sign Up
        </h1>
        <h1
          className={modal === "login" ? "selected-form" : "nonselected-form"}
          onClick={() => openModal("login")}
        >
          Log In
        </h1>
      </section>
    );

    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={(e) => e.stopPropagation()}>
          {user ? null : sessionForm}
          {component}
        </div>
      </div>
    );
}

const mSTP = state => {
    return {
      modal: state.ui.modal,
      user: Boolean(state.session.id),
    };
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(mSTP, mDTP)(Modal);
