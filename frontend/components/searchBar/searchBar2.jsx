import React from "react";

class SearchBar2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const Listing = Object.assign({}, this.state);
    this.props.processForm(Listing);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  render() {
    return (
      <form className="search2" onSubmit={this.handleSubmit}>
        <input
          type="search"
          className="search-bar2"
          //   value="Shop for unique music gear..."
          onChange={this.update("filter")}
        />
        <i className="fas fa-search fa-rotate-90" id="search-button2"></i>
      </form>
    );
  }
}

export default SearchBar2;
