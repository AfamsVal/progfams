import React from 'react'
import ReactDOM from 'react-dom'
import { getPersistor } from '@rematch/persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css'
import Routes from './sharedComponents/router/Routes'
import 'antd/dist/antd.css'

import reportWebVitals from './reportWebVitals'

const persistor = getPersistor()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
