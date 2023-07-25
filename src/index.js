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
            <Route path="/personal-website" element={<App />} />
            <Route path="/personal-website/experience" element={<Experience />} />
            <Route path="/personal-website/contact" element={<Contact />} />
            <Route path="/personal-website/stack" element={<Stack />} />
          </Routes>
        </Router>
      </GeistProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)