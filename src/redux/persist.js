import storage from 'redux-persist/lib/storage'
import persistPlugin from '@rematch/persist'

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['loading']
}

export const persistStorage = persistPlugin(persistConfig)
