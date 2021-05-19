import React from 'react'
import { Link } from 'react-router-dom'

class ResultIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const result = this.props.cartItems.map((cart) => {
            const post = `/listings/${cart.id}`;
            return (
              <Link
                to={post}
                className="search-link"
                key={cart.id}
              >
                <div className="search-item">
                  <img
                    src={cart.photoUrl}
                    alt="Gibson"
                    className="search-item-img"
                  />
                  <div className="item-search">
                    <section className="item-search-info">
                      <section className="search-item-info">
                        <h3 className="search-item-title">
                          {cart.brand} {cart.model}
                        </h3>
                        <h3 className="index-title">{cart.title}</h3>
                        <h3 className='index-price'>${cart.price}</h3>
                      </section>
                    </section>
                  </div>
                </div>
              </Link>
            );
        })
        return (
            <div className='result-index'>
                {result}
            </div>
        )
    }
}

export default ResultIndex
