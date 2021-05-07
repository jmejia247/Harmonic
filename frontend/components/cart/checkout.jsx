import React from 'react'
import { Link, connect } from 'react-router-dom'

class Checkout extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         window.location.href = "https://harmonic-aa.herokuapp.com/#/"; 
    //     }, 5000)
    // }

    render() {
        return (
          <div className="checkout-box">
            <h3 className="checkout-box-title">
              Thank You For Your Purchase! click <Link to='/' className='checkout-link'>here</Link> to be redirected
              to the home page
            </h3>
          </div>
        );
    }
}

export default Checkout
