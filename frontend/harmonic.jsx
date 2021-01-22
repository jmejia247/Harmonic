import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, login, logout } from './actions/session_actions'
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
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
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
})
