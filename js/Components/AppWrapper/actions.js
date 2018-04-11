// Action creators
import * as ACTION from  './consts';

export const userLogout = () => {
  return dispatch => {
    return firebase
    .auth()
    .signOut().then((response) => {
      console.log('action done');
      dispatch({
        type: ACTION.USER_SIGN_OUT,
        payload: response
      })
    })
  }
}

export const userSignIn = (data) => {
  return dispatch => {
    return firebase
    .auth()
    .signInWithEmailAndPassword(data.email, data.password).then((response) => {
      dispatch({
        type: ACTION.USER_SIGN_IN,
        payload: response
      })
    })
  }
}

export const userRegistration = (data) => {
  return dispatch => {
    return firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password).then((response) => {
      dispatch({
        type: ACTION.USER_REGISTRATION,
        payload: response
      })
    })
  }
}