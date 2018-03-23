import { put, call, all, takeLatest } from 'redux-saga/effects'

import {
  ME_REQUEST,
  ME_REQUEST_SUCCESS,
  ME_UPDATE_REQUEST,
  ME_UPDATE_REQUEST_SUCCESS,
  APP_RESET_AND_NAVIGATE
} from '../config/constants/actionTypes'

import { fetch, update } from '../services/meApi'

const meRequest = function * meRequest (action) {
  const request = yield call(fetch, action.payload)

  if (request.response) {
    yield put({ type: ME_REQUEST_SUCCESS, payload: request.response.data })
  }
}

const meUpdateRequest = function * meUpdateRequest (action) {
  const request = yield call(update, action.payload)

  if (request.response) {
    yield put({
      type: ME_UPDATE_REQUEST_SUCCESS,
      payload: request.response.data
    })

    if (action.payload.redirectTo) {
      yield put({
        type: APP_RESET_AND_NAVIGATE,
        payload: { routeName: action.payload.redirectTo }
      })
    }
  }
}

const watchMeSaga = function * watchMeSaga () {
  return yield all([
    takeLatest(ME_REQUEST, meRequest),
    takeLatest(ME_UPDATE_REQUEST, meUpdateRequest)
  ])
}

export default watchMeSaga
