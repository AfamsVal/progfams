import loadingPlugin from '@rematch/loading'
import { init } from '@rematch/core'

import * as models from './models'
import { persistStorage } from './persist'

const store = init({
  models,
  plugins: [loadingPlugin(), persistStorage]
})

export const { dispatch } = store

export default store
