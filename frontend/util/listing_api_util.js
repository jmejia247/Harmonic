// api_listings GET    /api/listings(.:format)       api/listings#index {:format=>:json}
// api_listing GET    /api/listings/:id(.:format)   api/listings#show {:format=>:json}

export const fetchListings = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/listings`,
    })
}

export const fetchListing = listingId => {
    return $.ajax({
        method: 'GET',
        url: `/api/listings/${listingId}`
    })
}
