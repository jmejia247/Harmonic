import React from "react";
import { Link } from "react-router-dom";

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filterbar">
        <div className="bar1">
          <h3 to="/" className="filter-navbar">
            Harmonics is a way of producing a safe environment for musicians to find the equipment they need to make the music they desire.
          </h3>
          {/* <h3 to="/" className="filter-navbar">
            Pedals and Amplifiers
          </h3>
          <h3 to="/" className="filter-navbar">
            Keyboards and Synths
          </h3>
          <h3 to="/" className="filter-navbar">
            Recording Gear
          </h3>
          <h3 to="/" className="filter-navbar">
            Drums
          </h3>
          <h3 to="/" className="filter-navbar">
            Bass'
          </h3>
          <h3 to="/" className="filter-navbar">
            and More
          </h3> */}
        </div>
        <div className="bar2">
          {/* <Link to='/' className='filter-navbar2'>Brands</Link>
          <Link to='/' className='filter-navbar2'>News</Link>
          <Link to='/' className='filter-navbar2'>Shops</Link> */}
          <a
            href="https://github.com/jmejia247"
            target="_blank"
            rel="noreferrer"
            className="filter-navbar2"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/jose-mejia-531907206/"
            target="_blank"
            rel="noreferrer"
            className="filter-navbar2"
          >
            LinkedIn
          </a>
          <a
            href="https://angel.co/u/jose-mejia-15"
            target="_blank"
            rel="noreferrer"
            className="filter-navbar2"
          >
            AngelList
          </a>
        </div>
      </div>
    );
  }
}

export default FilterBar;
