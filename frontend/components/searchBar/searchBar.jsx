import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        const Listing = Object.assign({}, this.state);
        this.props.processForm(Listing);        
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            });
        }
    }

    render() {
        const icon = <i className="fas fa-search"></i>;
        return (
          <form className="search" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="search-bar1"
              value="Shop for unique music gear..."
              onChange={this.update("filter")}
            />
            <i className="fas fa-search" id='search-button'></i>
          </form>
        );
    }
}

export default SearchBar;
