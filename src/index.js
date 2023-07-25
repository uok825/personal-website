import React from 'react'
import ReactDOM from 'react-dom'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from './App'
import Experience from './experience'
import Contact from './contact'
import Stack from './stack'

ReactDOM.render(
  <React.StrictMode>
      <GeistProvider>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/stack" element={<Stack />} />
          </Routes>
        </Router>
      </GeistProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)