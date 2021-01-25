import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import loginFormContainer from './session/login_form_container';
import signupFormContainer from "./session/signup_form_container";
import { AuthRoute } from '../util/route_util';
import NavBar from './navBar/navBar_container';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <header id="main">
      <Link to="/" className="splash">
        <h1 id="logo">Harmonic</h1>
      </Link>
      <NavBar />
    </header>
    <img className='background'
      src={window.guitar}
      alt="guitar"
    />

    <Switch>
      <AuthRoute exact path="/login" component={loginFormContainer} />
      <AuthRoute exact path="/signup" component={signupFormContainer} />
    </Switch>
  </div>
);

export default App;
