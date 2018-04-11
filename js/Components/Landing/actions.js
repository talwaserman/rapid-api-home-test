// Action creators
import * as ACTION from './consts';

export const setSearchTerm = searchTerm => ({
  type: ACTION.SET_SEARCH_TERM,
  payload: searchTerm
});

export const clearSearchTerm = searchTerm => ({
  type: ACTION.CLEAR_SEARCH_TERM,
  payload: searchTerm
});

// with thunk
export const getAllMovies = () => {
  return dispatch => {
    return fetchMovies().then(
      response => response.json().then(json => {
        dispatch({
          type: ACTION.GET_ALL_MOVIES,
          payload: json
        })
      })
    )
  }
}

const fetchMovies = () => {
  return fetch('http://localhost:3000/all',{method:'GET'});
}