// api_reviews GET    /api/reviews(.:format)    api/reviews#index {:format=>:json}
// api_review GET    /api/reviews/:id(.:format)     api/reviews#show {:format=>:json}
// api_listing_reviews POST   /api/listings/:listing_id/reviews(.:format)               api/reviews#create {:format=>:json}
// api_listing_review  PATCH  /api/listings/:listing_id/reviews/:id(.:format)           api/reviews#update {:format=>:json}
//                     PUT    /api/listings/:listing_id/reviews/:id(.:format)           api/reviews#update {:format=>:json}
//                     DELETE /api/listings/:listing_id/reviews/:id(.:format)           api/reviews#destroy {:format=>:json}

export const fetchReviews = () => {
    return $.ajax({
        method: "GET",
        url: `/api/reviews`
    });
};

export const fetchReview = (reviewId) => {
    return $.ajax({
        method: "GET",
        url: `/api/reviews/${reviewId}`
    });
};

export const postReview = (review) => {
    return $.ajax({
        method: "POST",
        url: `/api/listings/${review.listingId}/reviews`,
        data: { review }
    })
}

export const updateReview = (review) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/listings/${review.listingId}/reviews/${review.id}`,
        data: { review }
    })
}

export const deleteReview = (reviewId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/reviews/${reviewId}`
    })
}
