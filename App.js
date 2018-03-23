import React from 'react'
import {
  Provider
} from 'react-redux'

import {
  PersistGate
} from 'redux-persist/lib/integration/react'

import {
  configureStore
} from './src/config/configureStore'

import {
  App
} from './src/containers'

export const {
  store,
  persistor
} = configureStore()

const Boot = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  )
}

export default Boot
