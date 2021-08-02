import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { getSingleModel } from '../utils/helpers'
import { dispatch } from '../redux/store'
import moment from 'moment'

const now = moment().unix()

async function handleRequest(req) {
  req.headers['Content-Type'] = 'application/json'
  req.headers.Accept = 'application/json'

  const authModel = getSingleModel('auth')
  const expTokenTime = authModel?.authUser?.exp

  if (expTokenTime && expTokenTime <= now) {
    dispatch({ type: 'auth/logout' })
  } else if (authModel?.authUser) {
    req.headers.Authorization = 'Bearer ' + authModel.authUser?.token
  }

  return req
}

async function handleResponse(res) {
  if (res.status === 401 || res.data?.code === 401) {
    dispatch({ type: 'auth/logout' })
  }

  return res
}

/**
 * This is used to generate a new token for api calls
 * @returns {Promise<void>}
 */
// async function refresh() {}

/**
 * This is used to modify the header request and relies on some header constraints
 * to generate some header fields
 */
axios.interceptors.request.use(
  async req => await handleRequest(req),
  error => Promise.reject(error)
)
/**
 * This is used to modify response call to reprocess error 401 and generate new
 * token to use for new and current running request.
 */
axios.interceptors.response.use(
  async res => await handleResponse(res),
  err => Promise.reject(err)
)

/***
 * The ApiHandler framework with observable
 */
export default {
  post: async (url, data, options) =>
    axios.post(options?.fullPath ? url : BASE_URL + url, data, options && { headers: options }),
  patch: async (url, data, options) =>
    axios.patch(options?.fullPath ? url : BASE_URL + url, data, options && { headers: options }),
  put: async (url, data, options) =>
    axios.put(options?.fullPath ? url : BASE_URL + url, data, options && { headers: options }),
  delete: async (url, data, options) => {
    data = data ? (data instanceof Object && !Object.keys(data).length ? null : data) : null
    const config = data ? { headers: options, data } : { headers: options }
    return axios.delete(options?.fullPath ? url : BASE_URL + url, config)
  },
  get: async (url, params, options) => {
    params = params
      ? params instanceof Object && !Object.keys(params).length
        ? null
        : params
      : null
    const config = params ? { headers: options, params } : { headers: options }
    return axios.get(options?.fullPath ? url : BASE_URL + url, config)
  }
}
