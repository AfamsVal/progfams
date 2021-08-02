import { notification } from 'antd'
import jwtDecode from 'jwt-decode'

import { AuthApi } from '../../services'
import { reducerActions } from '../reducer'

const initialState = {
  authUser: { token: null },
  isServerError: null
}

export const auth = {
  state: initialState,
  reducers: reducerActions,
  effects: dispatch => ({
    async initLogin(payload) {
      dispatch.auth.setError(null)
      try {
        const { data } = await AuthApi.login(payload.data)

        if (!data.token) {
          throw new Error(data?.message || 'Could not authenticate user')
        }

        if (!data.verified) {
          notification.error({
            message: 'Account Verification:',
            description: 'Account not yet verified!'
          })
          return payload.history.push('/confirm-signup')
        }

        dispatch.auth.setState({ authUser: { token: data.token } })
        const { data: userInfo } = await AuthApi.getUser()
        const user = jwtDecode(data.token)
        dispatch.auth.setState({
          authUser: { token: data.token, userInfo: { ...user, ...userInfo } }
        })

        notification.success({
          message: 'Login successful'
        })
        if (data.is_admin === 1) {
          payload.history.push('/admin')
        } else {
          payload.history.push('/dashboard')
        }
      } catch ({ response, message }) {
        notification.error({
          message: 'An error occurred',
          description: response?.data?.data.email || response?.data?.data.password || message
        })
      }
    },

    async register(payload) {
      dispatch.auth.setError(null)
      try {
        const { data } = await AuthApi.register(payload.signupDetails)

        if (!data.success) {
          throw new Error(data.message || 'Could not register user')
        }

        notification.success({
          message: data.message || 'Signup successfully'
        })

        if (data.success) {
          payload.history.push('/confirm-signup')
        }
      } catch ({ response, message }) {
        notification.error({
          message: 'An error occurred',
          description:
            response?.data?.data.first_name ||
            response?.data?.data.last_name ||
            response?.data?.data.email ||
            response?.data?.data.phone_number ||
            response?.data?.data.password ||
            message
        })
      }
    },
    async forgotPwd(payload) {
      dispatch.auth.setError(null)
      try {
        const { data } = await AuthApi.forgotPassword({ email: payload.email })
        const { success, message } = data.data

        if (!success) {
          throw new Error(message || 'Could not complete action')
        }

        notification.success({
          message: message || 'Code sent successfully'
        })

        if (success) {
          payload.history.push('/reset-password')
        }
      } catch ({ response, message }) {
        notification.error({
          message: 'An error occurred',
          description: response?.data?.data.email || response?.data?.data.password || message
        })
      }
    },
    async resetPwd(payload) {
      dispatch.auth.setError(null)
      try {
        const { email, ...info } = payload.data
        const { data } = await AuthApi.resetPassword({ email, info })
        const { success, message } = data
        if (!success) {
          throw new Error(data.message || 'Could not complete action. Please try again!')
        }

        notification.info({
          message: message || 'Password was changed successfully!'
        })

        if (success) {
          payload.history.push('/login')
        }
      } catch ({ response, message }) {
        notification.error({
          message: 'An error occurred',
          description: response?.data?.message?.email
            ? 'Unknown email field!'
            : '' || response?.data?.message?.new_password || message
        })
      }
    },
    async confirmSignUp(payload) {
      dispatch.auth.setError(null)
      try {
        const { data } = await AuthApi.confirmAccount(payload.token)
        const { success, message } = data
        if (!success) {
          throw new Error(message || 'Could not complete action. Please try again!')
        }
        notification.info({
          message: message || 'Account confirmed successfully!'
        })
        if (success) {
          payload.history.push('/login')
        }
      } catch ({ response, message }) {
        notification.error({
          message: 'An error occurred',
          description: response?.message || message
        })
      }
    },
    async reset() {
      await Promise.all([dispatch.auth.setState(initialState)])
    },

    async logout() {
      await Promise.all([dispatch.auth.setState(initialState), dispatch.loans.clear()])
    }
  })
}
