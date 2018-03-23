import {
  CONNECTION_CHANGED
} from '../config/constants/actionTypes'

const initialState = false

const connectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONNECTION_CHANGED: {
      return action.payload
    }

    default: {
      return state
    }
  }
}

export default connectionReducer
