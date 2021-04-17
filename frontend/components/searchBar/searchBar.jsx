import React from 'react';
import { debounce } from "lodash";

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filter: ''
      };
      this.search = debounce(this.search.bind(this), 400);
      this.update = this.update.bind(this)
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

    render() {
        return (
          <div className="search">
            <input
              type="search"
              className="search-bar1"
            //   value="Shop for unique music gear..."
              onChange={this.update}
            />
            <i className="fas fa-search fa-rotate-90" id="search-button"></i>
          </div>
        );
    }
}

export default SearchBar;
