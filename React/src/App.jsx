import { useState, useEffect } from 'react'
// import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import { addProduct, deleteProduct, updateProduct } from './api/product'
import ProductManagementPage from './pages/admin/ProductManagement'
import AddProductPage from './pages/admin/AddProduct'
import UpdateProductPage from './pages/admin/UpdateProduct'
import Dashboard from './pages/admin/Dashboard'
import Home from './pages/layout/Home'
import AdminLayout from './pages/layout/AdminLayout'

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
  const onHandleUpdate = (product) => {
    updateProduct(product).then(() => setProducts(products.map(item => item.id === product.id ? product : item)))
  }
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/admin/products' element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/admin/products/add' element={<AddProductPage onAdd={onHandleAdd} />} />
        <Route path='/admin/products/:id/update' element={<UpdateProductPage products={products} onUpdate={onHandleUpdate} />} /> */}
        <Route path='/' element={<Home />}>
          <Route index element={<HomePage />} /> {/* / - Home */}
          <Route path='products'>
            <Route index element={<ProductPage products={products} onRemove={onHandleRemove} />} />
            <Route path=':id' element={<ProductDetailPage />} /> {/* /products/:id - Detail */}
          </Route>
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProductPage products={products} onUpdate={onHandleUpdate} />} />
          </Route>
        </Route>
      </Routes>

    </div >
  )
}

export default App
