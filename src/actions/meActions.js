import {
  ME_REQUEST,
  ME_UPDATE_REQUEST
} from '../config/constants/actionTypes'

export const meRequest = payload => {
  return {
    type: ME_REQUEST,
    payload
  }
}

export const meUpdateRequest = payload => {
  return {
    type: ME_UPDATE_REQUEST,
    payload
  }
}
