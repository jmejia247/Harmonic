import React from 'react'

class updateReview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          title: this.props.review.title,
          content: this.props.review.content,
          rating: this.props.review.rating,
          author_id: this.props.review.author_id,
          listing_id: this.props.review.listing_id,
          id: this.props.review.id,
          email: this.props.review.email
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state);
        this.props.updateReview(review).then(this.props.closeModal);
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    render() {
        const {review} = this.props
        return (
          <div className="review-card">
            <form onSubmit={this.handleSubmit} className="review-form">
              <div className="review-input">
                <div className="review-info">
                  <label className="review-label-1">
                    You are reviewing: <h3>instrument</h3>
                  </label>
                  <label className="review-label-2">
                    Rating
                    <input
                      type="number"
                      onChange={this.update("rating")}
                      min="1"
                      max="5"
                      className="review-input-label-rating"
                      defaultValue={this.state.rating}
                    />
                  </label>
                  <label className="review-label-3">
                    Review Title:
                    <input
                      className="review-title"
                      type="text"
                      onChange={this.update("title")}
                      className="review-input-label"
                      defaultValue={this.state.title}
                    />
                  </label>
                  <label className="review-label-4">
                    Your Product Review
                    <textarea
                      className="review-input-text"
                      onChange={this.update("content")}
                      defaultValue={this.state.content}
                    />
                  </label>
                </div>
                <div className="review-tips">
                  <h3 className="review-tips-title">Review Tips</h3>
                  <h3 className="review-tips-info">
                    Do: talk about how it sounds, mention pros and cons, and
                    compare it to other products.
                  </h3>
                  <h3 className="review-tips-info">
                    Don't: review a seller, your shipping experience, or include
                    offensive content.
                  </h3>
                </div>
              </div>
              <div className="review-submit">
                <input
                  type="submit"
                  value="Update Review"
                  className="review-modal-submit"
                />
              </div>
            </form>
          </div>
        );
    }
}

export default updateReview
