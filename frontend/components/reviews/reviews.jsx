import React from 'react';

class Reviews extends React.Component {
    constructor(props) {
        super(props)
        this.logic = this.logic.bind(this)
    }

    logic() {
        if (this.props.user) {
            this.props.openModal("createReview");
        } else (
            this.props.openModal("signup")
        )
    }

    render() {
        const {reviews, listing} = this.props;
        const mapped = reviews.length > 0 ? reviews.map(review => {
            if (listing.id === review.listing_id) {
              return <Div className="review"></Div>;
            }
        }) : <p className='no-reviews'>There are no reviews for this product :(</p>
        return (
          <div className="reviews">
            <h3>Reviews of the {`${this.props.brand} ${this.props.model}`}</h3>
            {/* <i class="fas fa-chevron-down" className="chevron-closed"></i>
            <i class="fas fa-chevron-up" className="chevron-open"></i> */}

            <button className='create-review' onClick={this.logic}>Write a pruduct review</button>
            <section className='review-content'>
                {mapped}
            </section>
          </div>
        );
    }

}

export default Reviews
