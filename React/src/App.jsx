import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
      </Routes>

    </div >
  )
}

export default App
