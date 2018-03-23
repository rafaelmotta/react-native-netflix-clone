import {
  LOGOUT_REQUEST
} from '../config/constants/actionTypes'

export const logoutRequest = payload => {
  return {
    type: LOGOUT_REQUEST,
    payload
  }
}
