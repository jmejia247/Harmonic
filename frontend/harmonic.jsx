import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util'
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    
    window.signup = signup;
    window.login = login;
    window.logout = logout;



    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
})
