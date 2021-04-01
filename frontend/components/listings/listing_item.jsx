import React from "react";
import Reviews from '../reviews/reviews_container';

class ListingItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.requestListing(this.props.match.params.listingId);
        this.props.requestReviews();
    }
  
    render() {
        // debugger
        const {listing} = this.props;
        if (!listing) {
            return null;
        }
        return (
            <div className="listing-item">
                <img src={listing.photoUrl} alt="Gibson" className="listing-item-img" />
                <div className="listing-item-content">
                    <section>
                        <h3>{listing.brand}</h3>
                        <h3 className='listing-item-seperator'>{`>`}</h3>
                        <h3>{listing.model}</h3>
                    </section>
                    <h3 className='listing-item-title'>{listing.title}</h3>
                    <p className='listing-item-price'>${listing.price}</p>
                    <p>{listing.description}</p>
                    <input type="Submit" className='listing-item-button' value='Add to Cart'/>
                    <Reviews  brand={listing.brand} model={listing.model} reviews={this.props.reviews} listing={listing.id}/>
                </div>
            </div>
        );
    }
}

export default ListingItem;
