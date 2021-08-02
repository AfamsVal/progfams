import ApiHandler from './ApiHandler'

export default {
  login: data => ApiHandler.post('login', data),
  getUser: () => ApiHandler.get('info'),
  register: data => ApiHandler.post('register', data),
  forgotPassword: data => ApiHandler.post('forgot-password', data),
  confirmAccount: token => ApiHandler.get(`confirm_account/${token}`),
  resetPassword: data => ApiHandler.post(`reset-password/${data.email}`, data.info)
}
