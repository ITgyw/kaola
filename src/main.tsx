import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './rem'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

import './assets/styles/reset.css'
import './assets/fonts/iconfont.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
