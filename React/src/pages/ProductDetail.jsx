import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    console.log(id);
    useEffect(() => {
        fetch('http://localhost:3000/products/' + id)
            .then(response => response.json())
            .then(data => setProduct(data))
    })
    return (
        <div>
            <h1>ProductDetailPage</h1>
            <h2>{product.name}</h2>
        </div>
    )
}

export default ProductDetailPage