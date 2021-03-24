import React from "react";
import Listing from "../listings/listings";

class StaffPicks extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestListings();
  }

  render() {
    if (!this.props.listings[0]) {
      return null;
    }

    const listings = this.props.listings.map((listing) => {
      return <Listing key={listing.id} listing={listing} />;
    });
    debugger;
    return (
      <section className="discover-section">
        <h1 className="discover-heading">Try one of these great picks</h1>
        <ul className="discover">{listings}</ul>
      </section>
    );
  }
}

export default StaffPicks;
