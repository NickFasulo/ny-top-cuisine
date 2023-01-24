import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import './global.css'

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById('root')
)
