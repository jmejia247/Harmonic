import React from "react";
import Listing from "../listings/listings";

class StaffPicks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="staffpicks-section">
        <h1 className="staffpicks-heading">
          New gear added every minute. What will you find?
        </h1>
        <ul className="staffpicks">
          <li className="stile">
            <Listing />
          </li>
          <li className="stile">
            <Listing />
          </li>
          <li className="stile">
            <Listing />
          </li>
          <li className="stile">
            <Listing />
          </li>
          <li className="stile">
            <Listing />
          </li>
          <li className="stile">
            <Listing />
          </li>
          <li className="stile">
            <Listing />
          </li>
          <li className="stile">
            <Listing />
          </li>
          <li className="stile">
            <Listing />
          </li>
          <li className="stile">
            <Listing />
          </li>
          <li className="stile">
            <Listing />
          </li>
          <li className="stile">
            <Listing />
          </li>
        </ul>
      </section>
    );
  }
}

export default StaffPicks;
