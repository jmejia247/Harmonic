import React from 'react';
import StaffPicks from "../staffPicks/staffPicks_container";
import DiscoverScroll from "../discoverScroll/discoverScroll_container";
// import SearchBar2 from "../searchBar/searchBar2_container";
import { Link } from "react-router-dom";


const splashPage = () => {
    return (
      <div>
        <section className="body">
          <span className='overlay-container'>
            <div className='overlay'></div>
            <img className="background" src={window.guitar} alt="guitar" />
          </span>
          <div className="second-search">
            <h3>
              Join the millions of music lovers who use Reverb to find
              everything they need to make music
            </h3>
            <h2 className="s2-heading">Find Your Dream Gear</h2>
            {/* <SearchBar2 /> */}
            <h3 className="s2-rand">NEED INSPIRATION? TRY ONE OF THESE</h3>
            <section className="category-link">
              <Link to="/listings/6" className="cat-link">
                Guitar
              </Link>
              <Link to="/listings/11" className="cat-link">
                Bass
              </Link>
              <Link to="/listings/16" className="cat-link">
                Drum
              </Link>
              <Link to="/listings/22" className="cat-link">
                Keyboard
              </Link>
            </section>
          </div>
          <section>
            <DiscoverScroll />
            <StaffPicks />
          </section>
        </section>
      </div>
    );
}

export default splashPage;