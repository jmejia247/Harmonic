import React from 'react'

class reviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            rating: '',
            author_id: this.props.user[this.props.userId].id,
            listing_id: this.props.listing[this.props.id].id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state);
        this.props.processForm(review).then(this.props.closeModal);
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
                <label>
                  You are reviewing:
                  <h3>instrument</h3>
                </label>
                <label >Rating
                    <input type="number" onChange={this.update("rating")} />
                </label>
                <label>
                  Review Title:
                  <input
                    className="review-title"
                    type="text"
                    onChange={this.update("title")}
                  />
                </label>
                <label>
                  Your Product Review
                  <textarea
                    className="review-content"
                    onChange={this.update("content")}
                  />
                </label>
              </div>
              <section className="review-tips"></section>
              <input type="submit" value='Post Review' />
            </form>
          </div>
        );
    }
}

export default reviewForm
