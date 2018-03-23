import {
  isDev
} from './env'

export const REQUEST_DELAY = isDev ? 1 : 0
export const DEBOUNCE_TIMER = 300
