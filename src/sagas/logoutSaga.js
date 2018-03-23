import {
  delay
} from 'redux-saga'

import {
  put,
  all,
  takeLatest
} from 'redux-saga/effects'

import {
  LOGOUT_REQUEST,
  LOGOUT_REQUEST_SUCCESS,
  APP_RESET_AND_NAVIGATE
} from '../config/constants/actionTypes'

const logoutRequest = function * logoutRequest () {
  yield put({
    type: APP_RESET_AND_NAVIGATE,
    payload: {
      routeName: 'SessionHome',
      avoidDelay: true
    }
  })

  yield delay(250)
  yield put({ type: LOGOUT_REQUEST_SUCCESS })
}

const watchLogoutSaga = function * watchLogoutSaga () {
  return yield all([takeLatest(LOGOUT_REQUEST, logoutRequest)])
}

export default watchLogoutSaga
