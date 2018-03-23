import {
  LOGIN_REQUEST
} from '../config/constants/actionTypes'

export const loginRequest = payload => {
  return {
    type: LOGIN_REQUEST,
    payload
  }
}
