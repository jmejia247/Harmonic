import React from "react";
import { Link } from "react-router-dom";
import listings_container from "./listings_container";

class Listing extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.listing)

    if (!this.props.listing) {
      return null;
    }

    const post = `/listings/${this.props.listing.id}`;

    return (
      <Link to={post} className='link-listing'>
      <div className="listing">
        <img src={this.props.listing.photoUrl} alt="Gibson" className="listing-img" />
        <div className='listing-content'>  
          <h3>{this.props.listing.brand}</h3>
          <h3>{this.props.listing.model}</h3>
          <p>${this.props.listing.price}</p>
        </div>
      </div>
      </Link>
    )
  }
}

export default Listing;

// dynamic render to replace once i finish listings

// ({ listings, requestListings })
// return (
//   <div className='listing'>
//       <div className='listing-content'>
//         <h3>{listing.title}</h3>
//         <span>{listing.rating}</span>
//         <div>{listing.price}</div>
//       </div>
//   </div>
// )
