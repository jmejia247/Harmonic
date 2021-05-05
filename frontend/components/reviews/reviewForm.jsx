import React from 'react'

class reviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            rating: '',
            author_id: this.props.user,
            listing_id: this.props.listing[this.props.id].id,
            email: this.props.email
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updates = this.updates.bind(this)
    }

    handleSubmit(e) {
      e.preventDefault();
      const review = Object.assign({}, this.state);
      this.props.processForm(review).then(this.updates());
    }

    updates() {
      this.props.closeModal();
      
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    render() {
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
                      min='1'
                      max='5'
                      className="review-input-label-rating"
                    />
                  </label>
                  <label className="review-label-3">
                    Review Title:
                    <input
                      className="review-title"
                      type="text"
                      onChange={this.update("title")}
                      className="review-input-label"
                    />
                  </label>
                  <label className="review-label-4">
                    Your Product Review
                    <textarea
                      className="review-input-text"
                      onChange={this.update("content")}
                    />
                  </label>
                </div>
                <div className="review-tips">
                  <h3 className='review-tips-title'>Review Tips</h3>
                  <h3 className='review-tips-info'>
                    Do: talk about how it sounds, mention pros and cons, and
                    compare it to other products.
                  </h3>
                  <h3 className='review-tips-info'>
                    Don't: review a seller, your shipping experience, or include
                    offensive content.
                  </h3>
                </div>
              </div>
              <div className="review-submit">
                <input
                  type="submit"
                  value="Post Review"
                  className="review-modal-submit"
                />
              </div>
            </form>
          </div>
        );
    }
}

export default reviewForm
