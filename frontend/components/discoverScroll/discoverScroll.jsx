import React from 'react';
import Listing from '../listings/listings';

class DiscoverScroll extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <section className="discover-section">
            <h1 className="discover-heading">
              Jose's Guitar Picks
            </h1>
            <ul className="discover">
              <li className="tile">
                <Listing />
              </li>
              <li className="tile">
                <Listing />
              </li>
              <li className="tile">
                <Listing />
              </li>
              <li className="tile">
                <Listing />
              </li>
              <li className="tile">
                <Listing />
              </li>
              <li className="tile">
                <Listing />
              </li>
              <li className="tile">
                <Listing />
              </li>
              <li className="tile">
                <Listing />
              </li>
              <li className="tile">
                <Listing />
              </li>
              <li className="tile">
                <Listing />
              </li>
              <li className="tile">
                <Listing />
              </li>
              <li className="tile">
                <Listing />
              </li>
            </ul>
          </section>
        );
    }
}

export default DiscoverScroll;
