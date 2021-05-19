import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVESEARCHRESULTS = "RECEIVESEARCHRESULTS";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";
export const REMOVE_SEARCH_ERRORS = "REMOVE_SEARCH_ERRORS";

export const receive_search_results = payload => {
    return {
      type: RECEIVESEARCHRESULTS,
      payload
    };
}

const receiveSearchErrors = (errors) => {
  return {
    type: RECEIVE_SEARCH_ERRORS,
    errors,
  };
};

export const removeSearchErrors = () => {
  return {
    type: REMOVE_SEARCH_ERRORS,
  };
};

export const fetch_search_results = query => dispatch => {
    return SearchApiUtil.fetchSearch(query).then(
      (listings) => dispatch(receive_search_results(listings)),
      (errors) => dispatch(receiveSearchErrors(errors.responseJSON))
    );
}
