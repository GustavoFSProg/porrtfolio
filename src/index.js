import React from 'react'
import ReactDOM from 'react-dom'
import { Footer } from 'components/Footer'
import { Router } from './router'

import './global.css'

ReactDOM.render(
  <>
    <Router />
    <Footer />
  </>,
  document.getElementById('root')
)
