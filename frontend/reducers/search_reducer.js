import { RECEIVESEARCHRESULTS } from '../actions/search_actions'

const SearchReducer = (state = null, action) => {
    switch (action.type) {
      case RECEIVESEARCHRESULTS:
        return action.payload.listings
      default:
        return state;
    }
}

export default SearchReducer
