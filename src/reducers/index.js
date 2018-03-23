import {
  persistCombineReducers
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import me from './meReducer'
import connection from './connectionReducer'
import nav from './navigatorReducer'
import rehydrated from './rehydratedReducer'

// Redux persist settings
const config = {
  key: 'root',
  storage,
  whitelist: [
  ]
}

const reducers = persistCombineReducers(config, {
  me,
  connection,
  nav,
  rehydrated
})

export default reducers
