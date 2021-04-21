import React from "react";
import Listing from "../listings/listings_container";

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

    const picks = [11, 10, 15, 13, 14, 12, 16, 19, 28];
    const filteredPicks = this.props.listings.filter((listing) => {
      return picks.includes(listing.id)
    })

    const listings = filteredPicks.map((listing) => {
      return <Listing key={listing.id} listing={listing} />;
    });
    debugger;
    return (
      <section className="discover-section">
        <h1 className="discover-heading">Jose's Top Picks</h1>
        <ul className="discover">{listings}</ul>
      </section>
    );
  }
}

export default StaffPicks;
