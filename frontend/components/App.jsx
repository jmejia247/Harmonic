import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import loginFormContainer from './session/login_form_container';
import signupFormContainer from "./session/signup_form_container";
import { AuthRoute } from '../util/route_util';
import NavBar from './navBar/navBar_container';
import Modal from './modal/modal';
import SearchBar from './searchBar/searchBar_container';
import FilterBar from './filterBar/filterBar_container';
import listingsContainer from './listings/listings_container';
import SplashPage from "./splashPage/splashPage";
import ListingItemContainer from './listings/listing_item_container';
import CartContainer from '../components/cart/cart_container';

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
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <Route
        exact
        path="/listings/:listingId"
        component={ListingItemContainer}
      />
      <AuthRoute exact path="/login" component={loginFormContainer} />
      <AuthRoute exact path="/signup" component={signupFormContainer} />
      <Route exact path="/cart" component={CartContainer} />
      <Route path="/listings" component={listingsContainer} />
    </Switch>

    <section className="footer">
      <div className="footer-div">
        <ul>
          <a
            href="https://whats-cooking-programmers.herokuapp.com/#/"
            target="_blank"
            rel="noreferrer"
            id="li1"
          >
            What's Cooking?
          </a>
          <a
            href="https://github.com/galenddavis/whats_cooking"
            target="_blank"
            rel="noreferrer"
            id="li1"
          >
            Github
          </a>
          <a
            href="https://whats-cooking-programmers.herokuapp.com/#/"
            target="_blank"
            rel="noreferrer"
            id="li1"
          >
            Live link
          </a>
        </ul>
        <ul>
          <a
            href="https://github.com/jmejia247"
            target="_blank"
            rel="noreferrer"
            id="li1"
          >
            Jose's Github
          </a>
          <a
            href="https://www.linkedin.com/in/jose-mejia-531907206/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://angel.co/u/jose-mejia-15"
            target="_blank"
            rel="noreferrer"
          >
            AngelList
          </a>
        </ul>
        <ul>
          <a
            href="https://jmejia247.github.io/BattleForYavin/"
            target="_blank"
            rel="noreferrer"
            id="li1"
          >
            Battle for Yavin
          </a>
          <a
            href="https://github.com/jmejia247/BattleForYavin"
            target="_blank"
            rel="noreferrer"
            id="li1"
          >
            Github
          </a>
          <a
            href="https://jmejia247.github.io/BattleForYavin/"
            target="_blank"
            rel="noreferrer"
            id="li1"
          >
            Live link
          </a>
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
