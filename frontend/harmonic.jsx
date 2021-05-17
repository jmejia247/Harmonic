import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { requestListing, requestListings } from './actions/listing_actions';
import { fetchListings, fetchListing } from './util/listing_api_util';

document.addEventListener("DOMContentLoaded", () => {
    window.requestListing = requestListing;
    window.requestListings = requestListings;
    window.fetchListing = fetchListing;
    window.fetchListings = fetchListings;
    let store;
    if (window.currentUser) {
        const { currentUser } = window;
        const { id } = currentUser;
        const preloadedState = {
          entities: {
            users: {
              [id]: currentUser,
            },
          },
          session: {
            id: currentUser.id,
            email: currentUser.email
          }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
})
