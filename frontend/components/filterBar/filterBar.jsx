import React from "react";
import { Link } from "react-router-dom";

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filterbar">
          <div className='bar1'>
          <Link to='/' className='filter-navbar'>Guitars</Link>
          <Link to='/' className='filter-navbar'>Pedals and Amplifiers</Link>
          <Link to='/' className='filter-navbar'>Keyboards and Synths</Link>
          <Link to='/' className='filter-navbar'>Recording Gear</Link>
          <Link to='/' className='filter-navbar'>Drums</Link>
          <Link to='/' className='filter-navbar'>DJ and audio gear</Link>
          <Link to='/' className='filter-navbar'>More Categories</Link>
          </div>
          <div className='bar2'>
          <Link to='/' className='filter-navbar2'>Brands</Link>
          <Link to='/' className='filter-navbar2'>News</Link>
          <Link to='/' className='filter-navbar2'>Shops</Link>
          <Link to='/' className='filter-navbar2'>Github</Link>
          <Link to='/' className='filter-navbar2'>LinkedIn</Link>
          <Link to='/' className='filter-navbar2'>Resume</Link>
          </div>
      </div>
    );
  }
}

export default FilterBar;
