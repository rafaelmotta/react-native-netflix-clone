import React from 'react'
import PropTypes from 'prop-types'

import {
  FontAwesome
} from '@expo/vector-icons'

Icon.propTypes = {
  name: PropTypes.string.isRequired
}

function Icon (props) {
  return <FontAwesome {...props} name={props.name} />
}

export default Icon
