import React from 'react'
import { connect } from "react-redux";
import Cart from '../cart/cart'
import { requestCart, deleteCart } from '../../actions/cart_actions'

const mSTP = (state) => {
    return {
        carts: Object.values(state.cart),
        cartId: Object.keys(state.cart),
        listings: state.entities.listings
    }
}

const mDTP = (state) => {
    return {
        fetch: () => dispatch(requestCart()),
        delete: (cart) => dispatch(deleteCart(cart))
    }
}

export default connect(mSTP, mDTP)(Cart)
