import { RECEIVESEARCHRESULTS } from '../actions/search_actions'

const SearchReducer = (state = null, action) => {
    switch (action.type) {
      case RECEIVESEARCHRESULTS:
        // if (action.payload.listings === 'undefined') {
        //   return state;
        // } else {
        //   return action.payload.listings;
        // }
        return action.payload.listings
      default:
        return state;
    }
}

export default SearchReducer
