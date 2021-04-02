import React from 'react'

class reviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            rating: '',
            author_id: '',
            listing_id: ''
        }
    }

    render() {
        const {listing} = this.props;
        console.log(listing[this.props.match.params.listingId])
        return (
            <div>hello world</div>
        )
    }
}

export default reviewForm
