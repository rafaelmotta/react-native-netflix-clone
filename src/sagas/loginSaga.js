import {
  put,
  call,
  all,
  takeLatest
} from 'redux-saga/effects'

import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  APP_RESET_AND_NAVIGATE
} from '../config/constants/actionTypes'

import {
  INITIAL_SCREEN_LOGGED
} from '../config/constants/routesCallback'

import {
  create
} from '../services/loginApi'

const loginRequest = function * loginRequest (action) {
  const request = yield call(create, action.payload)

  if (request.response) {
    yield put({ type: LOGIN_REQUEST_SUCCESS, payload: request.response.data })
    yield put({
      type: APP_RESET_AND_NAVIGATE,
      payload: {
        routeName: INITIAL_SCREEN_LOGGED
      }
    })
  }
}

const watchLoginSaga = function * watchLoginSaga () {
  return yield all([takeLatest(LOGIN_REQUEST, loginRequest)])
}

export default watchLoginSaga
