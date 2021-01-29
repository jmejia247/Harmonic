import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { signup, login, logout } from './actions/session_actions';
import { requestListing, requestListings } from './actions/listing_actions';
import { fetchListings, fetchListing } from './util/listing_api_util';

document.addEventListener("DOMContentLoaded", () => {
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
    window.requestListing = requestListing;
    window.requestListings = requestListings;
    window.fetchListing = fetchListing;
    window.fetchListings = fetchListings;
    let store;
    let preloadedState = undefined;
    if (window.current_user) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
})
