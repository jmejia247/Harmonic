import React from 'react';
import { Route, Switch, Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
      debugger

        const content = this.props.user ? (
          <section className='user-interface'>
            <div id="nav-logout">
              <h3 className="logout-link" onClick={() => this.props.logout()}>
                <i class="fas fa-user-circle">
                <h3 className='logout-link-name'>{this.props.email}</h3>
                </i>
              </h3>
            </div>
            <Link to="/cart" className='cart-logo'>
              <i
                className="fas fa-shopping-cart"
                id="cart-logo"
                onClick={() => this.props.cart()}
              >
                <h3 >cart</h3>
              </i>
            </Link>
          </section>
        ) : (
          <div id="nav">
            <h3
              className="signup-link"
              onClick={() => this.props.openModal("signup")}
            >
              Sign up
            </h3>
            <h3
              className="login-link"
              onClick={() => this.props.openModal("login")}
            >
              Log In
            </h3>
          </div>
        );

        return (
          <div className="navbar">
            {content}
          </div>
        );
    };
}

export default NavBar;
