import * as CartApiUtil from '../util/cart_api_util';

export const RECIEVE_CART = "RECIEVE_CART";
// export const POST_CART = "POST_CART";
// export const DELETE_CART = "DELETE_CART";

const recieve_cart = (cart) => {
  return {
    type: RECIEVE_CART,
    cart,
  };
};

// const post_cart = (cart) => {
//     return {
//         type: POST_CART,
//         cart,
//     };
// };

// const delete_cart = (cart) => {
//     return {
//         type: DELETE_CART,
//         cart,
//     }
// }

export const requestCart = () => (dispatch) => {
  return CartApiUtil.fetchCart().then((cart) =>
    dispatch(recieve_cart(cart))
  );
};

export const postCart = (cart) => (dispatch) => {
    return CartApiUtil.post_cart(cart).then((cart) => dispatch(recieve_cart(cart)))
}

export const deleteCart = (cart) => (dispatch) => {
    return CartApiUtil.delete_cart(cart).then((cart) => dispatch(recieve_cart(cart)))
}
