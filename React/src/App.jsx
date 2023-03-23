import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import { addProduct, deleteProduct } from './api/product'
import ProductManagementPage from './pages/admin/ProductManagement'
import AddProductPage from './pages/admin/AddProduct'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  const onHandleRemove = (id) => {
    // fetch('http://localhost:3000/products/' + id, {
    //   method: 'DELETE'
    // }).then(() => setProducts(products.filter(item => item.id !== id)))
    deleteProduct(id).then(() => setProducts(products.filter(item => item.id !== id)))
  }
  const onHandleAdd = (product) => {
    addProduct(product).then(() => setProducts([...products, product]))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/admin/products' element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/admin/products/add' element={<AddProductPage onAdd={onHandleAdd} />} />
      </Routes>

    </div >
  )
}

export default App
