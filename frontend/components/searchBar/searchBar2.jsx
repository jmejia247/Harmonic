import React from "react";
import { debounce } from "lodash";
import SearchModal2 from "../modal/search_modal2";

class SearchBar2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
    };
    this.search = debounce(this.search.bind(this), 400);
    this.update = this.update.bind(this);
    this.modal = this.modal.bind(this);
  }

  search() {
    this.props.fetchResult(this.state.filter);
  }

  update(e) {
    this.setState({
      filter: e.currentTarget.value,
    });
    this.search();
  }
  modal() {
    this.props.openModal("searchResults2");
  }

  render() {
    return (
          <div className="search2">
            <div className="search-bar-components2">
              <input
                type="search2"
                className="search-bar2"
                onChange={this.update}
                onClick={() => this.modal()}
              />
              <i className="fas fa-search fa-rotate-90" id="search-button2"></i>
            </div>
            <Result />
          </div>
    );
  }
}

export default SearchBar2;
