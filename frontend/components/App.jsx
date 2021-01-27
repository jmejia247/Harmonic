import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import loginFormContainer from './session/login_form_container';
import signupFormContainer from "./session/signup_form_container";
import { AuthRoute } from '../util/route_util';
import NavBar from './navBar/navBar_container';
import Modal from './modal/modal';
import SearchBar from './searchBar/searchBar_container';
import DiscoverScroll from './discoverScroll/discoverScroll_container';
import FilterBar from './filterBar/filterBar_container';
import StaffPicks from './staffPicks/staffPicks';

const App = () => (
  <div>
    <Modal />
    <header id="main">
      <Link to="/" className="splash">
        <h1 id="logo">Harmonic</h1>
      </Link>
      <SearchBar />
      <NavBar />
    </header>
    <section className="filter">
      <FilterBar />
    </section>
    <section className="body">
      <img className="background" src={window.guitar} alt="guitar" />
      <div className="second-search">
        <h3>
          Join the millions of music lovers who use Reverb to find everything
          they need to make music
        </h3>
        <h2 className="s2-heading">Find Your Dream Gear</h2>
        <SearchBar />
        <h3 className="s2-rand">NEED INSPIRATION? TRY ONE OF THESE</h3>
        <section className="category-link">
          <Link to="/" className="cat-link">
            Guitar
          </Link>
          <Link to="/" className="cat-link">
            Bass
          </Link>
          <Link to="/" className="cat-link">
            Drum
          </Link>
          <Link to="/" className="cat-link">
            Keyboard
          </Link>
        </section>
      </div>
      <section>
        <DiscoverScroll />
        <StaffPicks />
      </section>
    </section>
    <Switch>
      <AuthRoute exact path="/login" component={loginFormContainer} />
      <AuthRoute exact path="/signup" component={signupFormContainer} />
    </Switch>

    <section className="footer">
      <div className="footer-div">
        <ul>
          <li id="li1">Github</li>
          <li>Linked In</li>
          <li>Resume</li>
          <li>Other projects</li>
          <li>Home</li>
        </ul>
        <ul>
          <li id="li1">Github</li>
          <li>Linked In</li>
          <li>Resume</li>
          <li>Other projects</li>
          <li>Home</li>
        </ul>
        <ul>
          <li id="li1">Github</li>
          <li>Linked In</li>
          <li>Resume</li>
          <li>Other projects</li>
          <li>Home</li>
        </ul>
      </div>
    </section>
    <section className="bottom-footer">
      <div className="bf-section1">
        <i className="fas fa-music"></i>
        <div className="bf-div">
          <h1>Harmonic Gives</h1>
          <p>
            Your purchases help youth music programs get the gear they need to
            make music.
          </p>
        </div>
      </div>
      <div className="bf-section2">
        <i className="fas fa-tree"></i>
        <div className="bf-div">
          <h1>Carbon-Offset Shipping</h1>
          <p>
            Your purchases also help protect forests, including trees
            traditionally used to make instruments.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default App;
