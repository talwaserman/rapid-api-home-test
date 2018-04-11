import { combineReducers } from 'redux';

import ThumbnilReducer from './Components/Landing/reducer';
import UserStatusReducer from './Components/AppWrapper/reducer';
export default combineReducers({
  ThumbnilReducer,
  UserStatusReducer
});
