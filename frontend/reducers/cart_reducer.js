import { RECIEVE_CART } from '../actions/cart_actions'

const CartReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECIEVE_CART:
            return action.cart
        default:
            return state;
    }
}

export default CartReducer;
