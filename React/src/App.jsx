import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage products={products} />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
      </Routes>

    </div >
  )
}

export default App
