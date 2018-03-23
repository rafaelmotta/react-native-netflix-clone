import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform
} from 'react-native'

Touch.propTypes = {
  activeOpacity: PropTypes.number,
  children: PropTypes.node.isRequired,
  withoutFeedback: PropTypes.bool
}

Touch.defaultProps = {
  activeOpacity: 0.8,
  withoutFeedback: false
}

function Touch (props) {
  let TouchComponent =
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback

  if (props.withoutFeedback) {
    TouchComponent = TouchableWithoutFeedback
  }

  return (
    <TouchComponent {...props}>
      <View>{props.children}</View>
    </TouchComponent>
  )
}

export default Touch
