import store from './../redux/store'

export const getAllModels = () => {
  return store.getState()
}

export const getSingleModel = model => {
  const currentState = store.getState()
  return currentState?.[model]
}

export const reduxDispatch = () => store.dispatch
