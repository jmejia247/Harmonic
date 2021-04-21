import React from "react";
import Reviews from '../reviews/reviews_container';

class ListingItem extends React.Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.requestListing(this.props.match.params.listingId);
        this.props.requestReviews();
    }

    addItem(id) {
        debugger
        const {shopping} = this.props;
        const extract = shopping.map((item) => item.listing_id)
        debugger
        if (this.props.user && !extract.includes(id)) {
            debugger
            const item = { listing_id: this.props.listing.id, user_id: this.props.userId };
            this.props.cart(item);
        } else if (!this.props.user) {
            this.props.openModal('signup')
        }
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
                    <input type="Submit" className='listing-item-button' value='Add to Cart' onClick={() => this.addItem(listing.id)} />
                    <Reviews  brand={listing.brand} model={listing.model} reviews={this.props.reviews} listing={listing.id}/>
                </div>
            </div>
        );
    }
}

export default ListingItem;
