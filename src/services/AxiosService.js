import Axios from 'axios'

export const api = Axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api',
  timeout: 11000
})
