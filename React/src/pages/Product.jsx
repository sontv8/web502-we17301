import React, { useEffect, useState } from 'react'

const ProductPage = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id) => {
        props.onRemove(id)
    }
    return (
        <div>
            <h1>ProductPage</h1>
            {data.map(product => {
                return <div key={product.id}>
                    <h2>{product.name}</h2>
                    <button onClick={() => removeProduct(product.id)}>Remove</button>
                </div>
            })
            }
        </div>
    )
}

export default ProductPage