import * as actionTypes from './actionTypes';

export function userNotLogged() {
  return { type: actionTypes.USER_NOT_LOGGED };
}

export function userLogged(userData) {
  return {
    type: actionTypes.USER_LOGGED,
    userData: userData,
  };
}

export function loginUser(userData) {
  return {
    type: actionTypes.USER_LOGGED,
    userData: userData,
  };
}

export function logoutUser() {
  return { type: actionTypes.LOGOUT };
}
