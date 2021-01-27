import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        const content = this.props.user ? <div id="nav-logout" ><h3 className="logout-link" onClick={() => this.props.logout()}>Log Out</h3></div> : <div id="nav" ><h3
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
                </h3></div>

        return (
          <div className='navbar'>
            <i className="fas fa-shopping-cart" id='cart'><h3>cart</h3></i>
            {content}
          </div>
        );
    };
}

export default NavBar;
