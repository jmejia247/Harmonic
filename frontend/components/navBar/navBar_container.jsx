import React from 'react';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NavBar from './navBar';

const mSTP = state => {
    return {
        user: state.session.user
    };
};

const mDTP = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(mSTP, mDTP)(NavBar);
