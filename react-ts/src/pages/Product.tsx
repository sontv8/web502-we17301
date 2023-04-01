import React, { useEffect, useState } from 'react'
import { IProduct } from '../types/product'
interface IProps {
    products: IProduct[]
}
const ProductPage = (props: IProps) => {
    /*
        {
            products: [
                {}
                {}
            ]
        }
    */
    const [data, setData] = useState<IProduct[]>([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    return (
        <div>
            <h1>ProductPage</h1>
            {data.map(product => {
                return <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                </div>
            })
            }
        </div>
    )
}

export default ProductPage