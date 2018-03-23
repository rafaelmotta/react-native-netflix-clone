import React from 'react'

import {
  View,
  StyleSheet
} from 'react-native'

class Home extends React.Component {
  static navigationOptions = {
    title: 'Netflix'
  }

  render () {
    return (
      <View style={styles.container}></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {}
})

export default Home
