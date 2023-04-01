import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getAllProduct } from './api/product'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'

function App() {
  const [products, setProduct] = useState([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data))
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='/products'>
            <Route index element={<ProductPage products={products} />} />
          </Route>
        </Route>

        {/* <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProductPage products={products} onUpdate={onHandleUpdate} />} />
          </Route>
        </Route> */}
      </Routes>

    </div >
  )
}

export default App
