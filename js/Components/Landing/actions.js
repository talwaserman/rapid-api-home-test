// Action creators
import * as ACTION from  './consts';

export const saveDragLocation = (data) => {
  return dispatch => {
    dispatch({
      type: ACTION.SAVE_DRAGE_LOCATION,
      payload: data
    })
  }
}

export const getDragLocation = () => {
  return dispatch => {
    dispatch({
      type: ACTION.GET_DRAGE_LOCATION,
      payload: null
    })
  }
}
