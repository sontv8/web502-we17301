import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {

    const { id } = useParams()
    console.log(id);
    fetch('http://localhost:3000/products/' + id)
        .then(response => response.json())
        .then(data => console.log(data))
    return (
        <div>ProductDetailPage</div>
    )
}

export default ProductDetailPage