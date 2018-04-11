import * as CONST from './consts';

const DEFAULT_STATE = {
  userData: localStorage.getItem("rapidApi_user")
};

const UserStatusReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CONST.USER_SIGN_IN:
      localStorage.setItem("rapidApi_user", action.payload.email);
      window.location = '/';
      return Object.assign({}, state, { userData: action.payload.email });
    case CONST.USER_REGISTRATION:
      debugger;
      localStorage.setItem("rapidApi_user", action.payload.email);
      window.location = '/';
      return Object.assign({}, state, { userData: action.payload.email });
    case CONST.USER_SIGN_OUT:
      localStorage.setItem("rapidApi_user", "");
      return Object.assign({}, state, { userData:'' });
    default:
      return state;
  }
};

export default UserStatusReducer;
