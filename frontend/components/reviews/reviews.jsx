import React from 'react';
import ReviewModal from "../modal/review_modal";

class Reviews extends React.Component {
    constructor(props) {
        super(props)
        this.logic = this.logic.bind(this)
        this.logic2 = this.logic2.bind(this)
        this.delete = this.delete.bind(this)
        this.state = {
            rev: ''
        }
    }

    logic() {
        if (this.props.user) {
            this.props.openModal("createReview");
        } else (
            this.props.openModal("signup")
        )
    }
    logic2(review) {
        debugger
        if (this.props.user) {
            this.setState({
                rev: review
            })
            this.props.openModal("updateReview");
        } else (
            this.props.openModal("signup")
        )
    }

    delete(id) {
        debugger
        this.props.deleteReview(id);
    }

    render() {
        const {reviews, listing} = this.props;
        const rev = Object.values(reviews);



        const mapped = rev.filter(review => review.listing_id === listing);

        const rv = mapped.map(review => {
            debugger
            // <ReviewModal
            //   review={review}
            //   listing={this.props.listing}
            //   user={this.props.userId}
            // />
            return (
              <div className="review">
                <div className="title-review">
                  <h3 className="review-map-title">{review.title} by</h3>
                  <h3 className="review-map-name">{review.author_id}</h3>
                  <button
                    className={
                      this.props.userId === review.author_id
                        ? "review-map-user"
                        : "review-map-no-user"
                    }
                    onClick={() => this.delete(review.id)}
                  >
                    Delete
                  </button>
                  <button
                    className={
                      this.props.userId === review.author_id
                        ? "review-map-update"
                        : "review-map-no-update"
                    }
                    onClick={() => this.logic2(review)}
                  >
                    Update
                  </button>
                </div>
                <h3 className="review-map-rating">{review.rating}</h3>
                <p className="review-map-content">{review.content}</p>
              </div>
            );
        });




        return (
          <div className="reviews">
            <ReviewModal listing={this.props.listing} user={this.props.userId} review={this.state.rev}/>
            <h3>Reviews of the {`${this.props.brand} ${this.props.model}`}</h3>

            <button className='create-review' onClick={this.logic}>Write a product review</button>
            <div className='review-content'>
                {rv.length === 0 ? <p className='no-reviews'>There are no reviews for this product :(</p> : rv}
            </div>
          </div>
        );
    }

}

export default Reviews
