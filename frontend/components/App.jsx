import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import loginFormContainer from './session/login_form_container';
import signupFormContainer from "./session/signup_form_container";

const App = () => (
  <div>
    <header>
      <Link to="/">
        <h1>Harmonic</h1>
      </Link>
    </header>

    <Switch>
      <Route path="/login" component={loginFormContainer} />
      <Route path="/signup" component={signupFormContainer} />
    </Switch>
  </div>
);

export default App;
