import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <form className='search' >
                <input type="text" className='search-bar1' value="Shop for unique music gear..." />
                <input type="submit" className='search-button' value='Go'/>
            </form>
        )
    }
}

export default SearchBar;
