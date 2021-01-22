import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id='nav' >
                <Link to='/signup' className='signup-link' > 
                    <h3>Sign up</h3>
                </Link>
                <Link to='/login' className='login-link'> 
                    <h3>Log In</h3>
                </Link>
            </div>
        )
    };
}

export default NavBar;
