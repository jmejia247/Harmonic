import React from 'react'
import { Link } from "react-router-dom";

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {results} = this.props;
        const result = results === null ? [] : Object.values(results);
        const mappedResults = result.length === 0 ? result : result.map((item) => {
            const post = `/listings/${item.id}`;
            return (
              <Link
                to={post}
                className="search-link"
                onClick={this.props.closeModal}
                key={item.id}
              >
                <div className="search-item">
                  <img
                    src={item.photoUrl}
                    alt="Gibson"
                    className="search-item-img"
                  />
                  <div className="item-search">
                    <section className="item-search-info">
                      <section className="search-item-info">
                        <h3 className="search-item-title">
                          {item.brand} {item.model}
                        </h3>
                        <h3 className="">{item.title}</h3>
                        <h3>${item.price}</h3>
                      </section>
                    </section>
                  </div>
                </div>
              </Link>
            );
        })

        return (
            <div className='search-result-parent'>
                {mappedResults.length === 0 ? <h3 className='no-search-result'>No Results :(</h3> : mappedResults} 
            </div>
        )
    }
}

export default SearchResults
