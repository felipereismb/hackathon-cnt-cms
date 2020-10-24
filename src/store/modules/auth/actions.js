import { Types } from '../types';

export function loginRequest(username, password) {
  return {
    type: Types.LOGIN_REQUEST,
    payload: { username, password },
  };
}

export function loginSuccess(tokenApp, loggedIn) {
  return {
    type: Types.LOGIN_SUCCESS,
    payload: { tokenApp, loggedIn },
  };
}

export function logout() {
  return {
    type: Types.LOGOUT
  };
}

export function loginFailure() {
  return {
    type: Types.LOGIN_FAILURE
  };
}


