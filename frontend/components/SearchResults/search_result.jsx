import React from 'react'

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        debugger
        const {results} = this.props;
        debugger
        const result = results === null ? [] : Object.values(results);
        debugger
        const mappedResults = result.length === 0 ? result : result.map((item) => {
            return (
              <div className="cart-item">
                <img
                  src={item.photoUrl}
                  alt="Gibson"
                  className="cart-item-img"
                />
                <div className="item-cart">
                  <section className="item-cart-info">
                    <section className="cart-item-info">
                      <h3 className="cart-item-title">
                        {item.brand} {item.model}
                      </h3>
                    </section>
                  </section>
                </div>
              </div>
            );
        })

        return (
            <div>
                {mappedResults.length === 0 ? <h3>No Results :(</h3> : mappedResults} 
            </div>
        )
    }
}

export default SearchResults
