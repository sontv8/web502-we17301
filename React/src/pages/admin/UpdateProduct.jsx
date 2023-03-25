import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateProductPage = (props) => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [inputValue, setInputValue] = useState({})
    useEffect(() => {
        const currentProduct = props.products.find(item => item.id == id)
        setProduct(currentProduct)
    })
    const onHandleChange = (e) => {
        const { name, value } = e.target
        setInputValue({ ...inputValue, [name]: value });
    }
    const onHandleSubmit = (e) => {
        e.preventDefault()
        const updateData = { ...product, ...inputValue }
        /*
            product:
                id
                name
                price
            inputValue:
                id
                name
                price
        */
        props.onUpdate(updateData);
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" defaultValue={product?.name} onChange={onHandleChange} name='name' />
                <input type="number" defaultValue={product?.price} onChange={onHandleChange} name='price' />
                <button type="submit">Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProductPage