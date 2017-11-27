import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { loadItems } from './actions/itemActions'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css' //Webpack can import CSS files too!

const store = configureStore()

// Dispatch actions to load initial state.
store.dispatch(loadItems())

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
)
