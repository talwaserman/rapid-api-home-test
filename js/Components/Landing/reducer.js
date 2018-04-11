import * as CONST from './consts';

const getLocation = () => {
  let loc = JSON.parse(localStorage.getItem("rapidApi_location"));
  loc ? loc : loc = {x: 775, y: 75};
  return { deltaPosition: loc};
}

const ThumbnilReducer = (state = getLocation(), action) => {
  switch (action.type) {
    case CONST.GET_DRAGE_LOCATION:
      let loc = JSON.parse(localStorage.getItem("rapidApi_location"));
      loc ? loc : loc = {x: 775, y: 75};
      return Object.assign({}, state, { deltaPosition: {x: loc.x, y: loc.y} });
    case CONST.SAVE_DRAGE_LOCATION:
      localStorage.setItem("rapidApi_location", JSON.stringify(action.payload));
      return Object.assign({}, state, { deltaPosition: {x: action.payload.x, y: action.payload.y} });
    default:
      return state;
  }
};

export default ThumbnilReducer;
