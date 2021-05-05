import React from "react";
import Reviews from '../reviews/reviews_container';

class ListingItem extends React.Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
    }

    componentDidMount() {
        this.props.requestListing(this.props.match.params.listingId);
        this.props.requestReviews();
    }

    addItem(id) {
        const {shopping} = this.props;
        const extract = shopping.map((item) => item.listing_id)
        if (this.props.user && !extract.includes(id)) {
            const item = { listing_id: this.props.listing.id, user_id: this.props.userId };
            this.props.cart(item);
            document.getElementById("listing-dropdown").classList.toggle("added-to-cart");
            setTimeout(() => {
                document.getElementById("listing-dropdown").classList.remove('added-to-cart');
            }, 4000)
        } else if (!this.props.user) {
            this.props.openModal('signup')
        }
    }
  
    render() {
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
                    <div id='listing-dropdown' className='drpdwn'>
                        <h3 className='small-h3'>Item succesfully added to cart</h3>
                        <div className='dropdown-info'>
                            <img src={listing.photoUrl} alt="Gibson" className="small-img" />
                            <div className='small-div'>
                                <section>
                                    <h3>{listing.brand}</h3>
                                    <h3 className='small-seperator'>{`>`}</h3>
                                    <h3>{listing.model}</h3>
                                </section>
                                <h3 className='small-title'>{listing.title}</h3>
                                <p className='small-price'>${listing.price}</p>
                            </div>
                        </div>
                    </div>
                    <input type="Submit" className='listing-item-button' value='Add to Cart' onClick={() => this.addItem(listing.id)} />
                    <Reviews  brand={listing.brand} model={listing.model} reviews={this.props.reviews} listing={listing.id}/>
                </div>
            </div>
        );
    }
}

export default ListingItem;
