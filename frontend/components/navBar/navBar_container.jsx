import React from 'react';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NavBar from './navBar';
import { logout } from '../../actions/session_actions';
import { requestCart } from '../../actions/cart_actions'

const mSTP = state => {
    return {
        user: Boolean(state.session.id),
        email: state.session.email
    };
};

const mDTP = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        logout: () => dispatch(logout()),
        cart: () => dispatch(requestCart())
    };
};

export default connect(mSTP, mDTP)(NavBar);
