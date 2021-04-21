import React from 'react';

class Cart extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        debugger
        console.log(this.props.carts)
        const mapped = []
        const item = this.props.carts.forEach((cart, index) => {
            debugger
            const cartItem = this.props.listings[cart.listing_id];
            const remove = {id: index + 1, user_id: cart.user_id,listing_id: cart.listing_id}
            mapped.push(
              <div className="cart-item">
                <img
                  src={cartItem.photoUrl}
                  alt="Gibson"
                  className="cart-item-img"
                />
                <div className='item-cart'>
                    <section className='item-cart-info'>
                        <section className="cart-item-info">
                            <h3 className="cart-item-title">
                                {cartItem.brand} {cartItem.model}
                            </h3>
                            <button
                                className="cart-item-button"
                                onClick={() => this.props.delete(remove)}
                            >
                                Remove Item
                            </button>
                        </section>
                        <section className="cart-item-purchase">
                            <h3 className="cart-item-price">${cartItem.price}</h3>
                            <h3>+ Shipping&#42;</h3>
                            <h3>+ Applicable Tax</h3>
                        </section>
                    </section>
                    <section className='cart-item-checkout'>
                        <h3 className='cart-item-disclaimer'>Taxes and Fees calculated at checkout</h3>
                        <button className='cart-item-checkout-button'>Proceed to Checkout</button>
                    </section>
                </div>
              </div>
            );
        })

        return (
          <div className="cart">
            <div className='cart-item-quant'>
              <i className="fas fa-shopping-cart" id="cart">
                <h3>You have {this.props.carts.length} item(s) in your cart</h3>
              </i>
            </div>
            {mapped}
          </div>
        );
    }
}

export default Cart;
