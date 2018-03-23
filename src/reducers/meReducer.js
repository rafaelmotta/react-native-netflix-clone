import {
  LOGIN_REQUEST_SUCCESS,
  LOGOUT_REQUEST_SUCCESS
} from '../config/constants/actionTypes'

const initialState = {
  data: null
}

const meReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS: {
      return {
        data: {
          ...state.payload
        }
      }
    }

    case LOGOUT_REQUEST_SUCCESS: {
      return initialState
    }

    default: {
      return state
    }
  }
}

export default meReducer
