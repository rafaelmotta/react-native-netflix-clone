import axios from 'axios'
import { BASE_URL } from './constants/api'

axios.defaults.baseURL = BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 120000

export default axios
