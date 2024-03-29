import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import App from './containers/App.js'

import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
