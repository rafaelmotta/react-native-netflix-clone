import { createStore, applyMiddleware, compose } from 'redux'

import { persistStore } from 'redux-persist'
import { createLogger } from 'redux-logger'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import sagas from '../sagas'

export const configureStore = () => {
  const navigationMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
  )

  const sagaMiddleware = createSagaMiddleware()
  const loggerMiddleware = createLogger()

  let middlewares = [sagaMiddleware, navigationMiddleware]

  // Apply these middlewares only for dev mode
  if (process.env.NODE_ENV === 'development') {
    middlewares = [...middlewares, loggerMiddleware]
  }

  const store = createStore(reducers, compose(applyMiddleware(...middlewares)))

  sagaMiddleware.run(sagas)
  const persistor = persistStore(store, null)

  return {
    store,
    persistor
  }
}
