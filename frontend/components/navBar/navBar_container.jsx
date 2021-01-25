import React from 'react';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NavBar from './navBar';
import { logout } from '../../actions/session_actions';

const mSTP = state => {
    return {
        user: Boolean(state.session.id)
    };
};

const mDTP = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        logout: () => dispatch(logout())
    };
};

export default connect(mSTP, mDTP)(NavBar);
