import { takeLatest, call, put, all } from 'redux-saga/effects';
import { AUTH_LOGIN_REQUEST, loginRequestAction } from './actionTypes';
import { User } from 'common/models/user';
import { IAuthPayload } from './interfaces';
import { authService } from 'api/services/authService';
import { loadingStatus, loginFailure, loginSuccess } from './actions';

function* login(action: loginRequestAction) {
  yield put(loadingStatus(true));
  try {
    const user: User = yield call<(data: IAuthPayload) => void>(authService.login, action.payload);
    yield put(loginSuccess(user));
  } catch (e) {
    yield put(loginFailure(e.message));
  } finally {
    yield put(loadingStatus(false));
  }
}

function* watchLogin() {
  yield takeLatest(AUTH_LOGIN_REQUEST, login);
}

export default function* authSagas() {
  yield all([watchLogin()]);
}
