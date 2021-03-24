import React from 'react';
import Listing from '../listings/listings_container';

class DiscoverScroll extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      this.props.requestListings();
    }

    render() {
      if (!this.props.listings[0]) {
        return null
      }
      
      const listings = this.props.listings.map(listing => {
        return <Listing key={listing.id} listing={listing} />
      })
      
        return (
          <section className="discover-section">
            <h1 className="discover-heading">Try one of these great picks</h1>
            <ul className="discover">
             {listings}
            </ul>
          </section>
        );
    }
}

export default DiscoverScroll;
