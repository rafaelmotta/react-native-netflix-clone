import {
  put,
  all,
  takeLatest
} from 'redux-saga/effects'

import {
  REACT_NAVIGATION_NAVIGATE,
  REACT_NAVIGATION_RESET_NAVIGATION,
  APP_RESET_AND_NAVIGATE
} from '../config/constants/actionTypes'

const resetAndNavigate = function * resetAndNavigate (action) {
  yield put({
    type: REACT_NAVIGATION_RESET_NAVIGATION,
    index: 0,
    key: null,
    actions: [{
      type: REACT_NAVIGATION_NAVIGATE,
      routeName: action.payload.routeName,
      params: action.payload.params
    }]
  })
}

const watchNavigationSaga = function * watchNavigationSaga () {
  return yield all([
    takeLatest(APP_RESET_AND_NAVIGATE, resetAndNavigate)
  ])
}

export default watchNavigationSaga
