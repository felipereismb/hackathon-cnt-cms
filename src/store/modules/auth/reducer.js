import produce from 'immer';

import { Types } from '../types';

// Reducers
const INITIAL_STATE = {
  tokenApp: null,
  signed: false,
  loading: false,
}

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.LOGIN_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.LOGIN_SUCCESS: {
        draft.tokenApp = action.payload.tokenApp;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case Types.LOGOUT: {
        draft.tokenApp = null;
        draft.signed = false;
        break;
      }
      case Types.LOGIN_FAILURE: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}