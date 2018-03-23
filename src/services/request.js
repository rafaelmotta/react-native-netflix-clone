import {
  put
} from 'redux-saga/effects'

import {
  delay
} from 'redux-saga'

import {
  REQUEST_START,
  REQUEST_END
} from '../config/constants/actionTypes'

import {
  REQUEST_DELAY
} from '../config/constants/utils'

export default function * (options = {}, extraOptions = {}) {
  yield put({ type: REQUEST_START, payload: extraOptions.requestType })

  if (REQUEST_DELAY) yield delay(REQUEST_DELAY)
  yield put({ type: REQUEST_END, payload: extraOptions.requestType })

  return null
}
