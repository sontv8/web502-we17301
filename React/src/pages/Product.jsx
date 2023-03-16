import React, { useEffect, useState } from 'react'

const ProductPage = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    })
    return (
        <div>
            <h1>ProductPage</h1>
            {products.map(product => {
                return <div key={product.id}>
                    <h2>{product.name}</h2>
                </div>
            })
            }
        </div>
    )
}

export default ProductPage