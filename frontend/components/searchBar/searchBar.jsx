import React from 'react';
import { debounce } from "lodash";
import SearchModal from '../modal/search_modal'

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filter: ''
      };
      this.search = debounce(this.search.bind(this), 400);
      this.update = this.update.bind(this);
      this.modal = this.modal.bind(this)
    };
    
    search() {
      this.props.fetchResult(this.state.filter)
    }

    update(e) {
      this.setState({
          filter: e.currentTarget.value
      });
      this.search()
    }
    modal() {
      debugger
      this.props.openModal("searchResults");
    }

    render() {
        return (
          <div
            className={
              this.props.modal === "searchResults"
                ? "search-modal-background"
                : "empty"
            }
            onClick={this.props.closeModal}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={
                this.props.modal === "searchResults"
                  ? "search-modal-background-child"
                  : "empty"
              }
            >
              <div className="search">
                <div className="search-bar-components">
                  <input
                    type="search"
                    className="search-bar1"
                    onChange={this.update}
                    onClick={() => this.modal()}
                  />
                  <i
                    className="fas fa-search fa-rotate-90"
                    id="search-button"
                  ></i>
                </div>
                <SearchModal />
              </div>
            </div>
          </div>
        );
    }
}

export default SearchBar;
