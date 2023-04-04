import React, { useEffect, useState } from 'react'
import { IProduct } from '../types/product'
interface IProps { // định nghĩa kiểu dữ liệu cho props truyền vào component
    products: IProduct[], // định nghĩa kiểu dữ liệu cho mảng products 
    onRemove: (id: number) => void // định nghĩa kiểu dữ liệu cho hàm onRemove
}

const ProductPage = (props: IProps) => { // khai báo kiểu dữ liệu cho props
    /*
        {
            products:[
                {},
                {}
            ]
        }
    */
    const [data, setData] = useState<IProduct[]>([]) //khởi taọ state data với kiểu dữ liệu của data là mảng IProduct
    useEffect(() => {
        setData(props.products)
    }, [props])

    function removeProduct(id: number) {
        // console.log(id);
        props.onRemove(id)
    }
    return (
        <div>
            {data.map(item => {
                return (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <button onClick={() => removeProduct(item.id)}>Remove</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductPage