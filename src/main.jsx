import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Movies } from './pages/Movies'
import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { App } from './App'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movies />} />
          <Route path="search" element={<Search />} />
        </Route>
        <App />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
