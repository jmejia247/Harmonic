import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVESEARCHRESULTS = "RECEIVESEARCHRESULTS";

export const receive_search_results = payload => {
    return {
      type: RECEIVESEARCHRESULTS,
      payload
    };
}

export const fetch_search_results = query => dispatch => {
    return SearchApiUtil.fetchSearch(query).then(listings => dispatch(receive_search_results(listings)))
}
