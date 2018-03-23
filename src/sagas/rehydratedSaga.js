import {
  Asset
} from 'expo'

import {
  all,
  put,
  takeLatest
} from 'redux-saga/effects'

import {
  REHYDRATE
} from 'redux-persist'

import {
  store
} from '../../App'

import {
  INITIAL_SCREEN_NOT_LOGGED,
  INITIAL_SCREEN_LOGGED
} from '../config/constants/routesCallback'

import {
  APP_RESET_AND_NAVIGATE
} from '../config/constants/actionTypes'

import images from '../config/images'

async function loadAssets () {
  const imageAssets = Object.values(images).map(image => {
    return Asset.fromModule(image).downloadAsync()
  })

  await Promise.all([...imageAssets])
}
const redirect = function * redirect () {
  yield loadAssets()

  const { me } = store.getState()
  let routeName = me.data ? INITIAL_SCREEN_LOGGED : INITIAL_SCREEN_NOT_LOGGED

  yield put({
    type: APP_RESET_AND_NAVIGATE,
    payload: {
      routeName
    }
  })
}

const watchRehydratedSaga = function * watchRehydratedSaga () {
  return yield all([takeLatest(REHYDRATE, redirect)])
}

export default watchRehydratedSaga
