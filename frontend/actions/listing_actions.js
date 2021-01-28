import * as ListingApiUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';

const receiveListings = listings => {
    return {
        type: RECEIVE_LISTINGS,
        listings
    }
}

const receiveListing = listing => {
    return {
        type: RECEIVE_LISTING,
        listing
    }
}

// requestListings
// requestListing(listingId)

export const requestListings = () => dispatch => {
    return ListingApiUtil.fetchListings().then(listings => dispatch(receiveListings(listings)))
}

export const requestListing = listingId => dispatch => {
    return ListingApiUtil.fetchListing(listingId).then(listing => dispatch(receiveListing(listing)))
}
