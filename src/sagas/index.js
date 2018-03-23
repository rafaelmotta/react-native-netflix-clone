import {
  fork,
  all
} from 'redux-saga/effects'

import watchAlertSaga from './alertSaga'
import watchNavigationSaga from './appNavigationSaga'
import watchLoginSaga from './loginSaga'
import watchLogoutSaga from './logoutSaga'
import watchMeSaga from './meSaga'
import watchRehydratedSaga from './rehydratedSaga'

const startForman = function * startForman () {
  yield all([
    fork(watchAlertSaga),
    fork(watchNavigationSaga),
    fork(watchLoginSaga),
    fork(watchLogoutSaga),
    fork(watchMeSaga),
    fork(watchRehydratedSaga)
  ])
}

export default startForman
