import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { Types } from '../types';

import { requestBase } from '~/services/request';
import history from '~/services/history';

import { loginSuccess, loginFailure } from './actions';

export function* login({ payload }) {
  const base64 = btoa(
    `"Email":"${payload.username}","Senha":"${payload.password}","grantType":"password"`,
  );
  const body = {
    data: base64,
  };

  const params = {
    url: '/sign-in',
    method: 'POST',
    body,
  };

  try {
    const response = yield call(requestBase, params);

    if (response.status === 200) {
      yield localStorage.setItem(
        'user/access_token',
        response.data.Token.AccessToken,
      );
      yield localStorage.setItem('user/id', response.data.Usuario.Id);

      const tokenApp = response.data.Usuario.TokenApp;
      const loggedIn = response.data;

      yield put(loginSuccess(tokenApp, loggedIn));
      yield delay(2000);
      history.push('/#/dashboard/minhas-rotinas/web-ponto');
    } else {
      toast.error(response.data.Error);
      yield put(loginFailure());
    }
  } catch (error) {
    toast.error('Falha na autenticação');
    yield put(loginFailure());
  }
}

export function signOut() {
  localStorage.removeItem('user/access_token');
  localStorage.removeItem('user/id');
  history.push('/');
}

export default all([
  takeLatest(Types.LOGIN_REQUEST, login),
  takeLatest(Types.LOGOUT, signOut),
]);
