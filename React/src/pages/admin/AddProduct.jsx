import React, { useState } from 'react'

const AddProductPage = (props) => {
    const [inputValue, setInputValue] = useState({})
    const onHandleChange = (e) => {
        setInputValue({ name: e.target.value });
    }
    const onHandleSubmit = (e) => {
        e.preventDefault()
        props.onAdd(inputValue);
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" placeholder='Product Name' onChange={onHandleChange} />
                <button type="submit">Add New Product</button>
            </form>
        </div>
    )
}

export default AddProductPage