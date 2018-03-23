import React from 'react'
import {
  connect
} from 'react-redux'

import {
  View,
  StyleSheet,
  StatusBar
} from 'react-native'

import {
  addNavigationHelpers
} from 'react-navigation'

import {
  createReduxBoundAddListener
} from 'react-navigation-redux-helpers'

import {
  AppNavigator
} from '../config/router'

import {
  navigationType,
  reduxActionType
} from '../config/types'

class App extends React.Component {
  static propTypes = {
    nav: navigationType.isRequired,
    dispatch: reduxActionType.isRequired
  }

  get navigation () {
    return addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
      addListener: createReduxBoundAddListener('root')
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppNavigator navigation={this.navigation} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = ({ dispatch, nav }) => {
  return {
    dispatch,
    nav
  }
}

const connectApp = connect(mapStateToProps)(App)
export default connectApp
