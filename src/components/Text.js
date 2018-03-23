import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  StyleSheet
} from 'react-native'

import theme from '../config/theme'

AppText.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
  italic: PropTypes.bool,
  bold: PropTypes.bool,
  semiBold: PropTypes.bool,
  light: PropTypes.bool
}

AppText.defaultProps = {
  style: {},
  italic: false,
  bold: false,
  semiBold: false,
  light: false
}

function AppText (props) {
  return (
    <Text
      {...props}
      style={[
        styles.text,
        props.style,
        props.bold && styles.textBold,
        props.semiBold && styles.textSemiBold,
        props.italic && styles.textItalic,
        props.light && styles.textLight
      ]}
    >
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'transparent'
  }
})

export default AppText
