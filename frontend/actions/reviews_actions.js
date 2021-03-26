import * as ReviewApiUtil from '../util/review_api_util'

export const RECIEVE_REVIEWS = 'RECIEVE_REVIEWS';
export const RECIEVE_REVIEW = 'RECIEVE_REVIEW';
export const POST_REVIEW = 'POST_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

const recieve_reviews = reviews => {
    return {
        type: RECIEVE_REVIEWS,
        reviews
    };
};

const recieve_review = review => {
    return {
        type: RECIEVE_REVIEW,
        review
    };
};

const post_review = review => {
    return {
        type: POST_REVIEW,
        review
    }
}

const update_review = review => {
    return {
        type: UPDATE_REVIEW,
        review
    }
}

const delete_review = () => {
    return {
        type: DELETE_REVIEW
    }
}

// requestReviews
// requestReview(reviewId)

export const requestReviews = () => dispatch => {
    return ReviewApiUtil.fetchReviews().then(reviews => dispatch(recieve_reviews(reviews)))
}

export const requestReview = reviewId => dispatch => {
    return ReviewApiUtil.fetchReview(reviewId).then(review => dispatch(recieve_review(review)))
}

export const postReview = (review) => dispatch => {
    return ReviewApiUtil.postReview(review).then(review => dispatch(post_review(review)))
}

export const updateReview = review => dispatch => {
    return ReviewApiUtil.updateReview(review).then(review => dispatch(update_review(review)))
}

export const deleteReview = reviewId => dispatch => {
    return ReviewApiUtil.deleteReview(reviewId).then(review => dispatch(delete_review(review.id)))
}
