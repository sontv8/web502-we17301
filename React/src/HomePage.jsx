import React, { useState, useEffect } from 'react'

const HomePage = () => {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([])

    const increment = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div>Count: {count}
            <button onClick={increment}></button>
            <hr />
            {products.map(item => {
                return <div key={item.id}>{item.name}</div>
            })}
        </div>
    )
}

export default HomePage