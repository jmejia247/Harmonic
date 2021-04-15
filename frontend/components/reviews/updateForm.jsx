import React from 'react'

class updateReview extends React.Component {
    constructor(props) {
        debugger
        super(props)
        this.state = {
          title: this.props.review.title,
          content: this.props.review.content,
          rating: this.props.review.rating,
          author_id: this.props.review.author_id,
          listing_id: this.props.review.listing_id,
          id: this.props.review.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        debugger
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
                <label>
                  You are reviewing:
                  <h3>instrument</h3>
                </label>
                <label >Rating
                    <input type="number" onChange={this.update("rating")} value={this.state.rating}/>
                </label>
                <label>
                  Review Title:
                  <input
                    className="review-title"
                    type="text"
                    onChange={this.update("title")} value={this.state.title}
                  />
                </label>
                <label>
                  Your Product Review
                  <textarea
                    className="review-content"
                    onChange={this.update("content")} value={this.state.content}
                  />
                </label>
              </div>
              <section className="review-tips"></section>
              <input type="submit" value='Update Review' />
            </form>
          </div>
        );
    }
}

export default updateReview
