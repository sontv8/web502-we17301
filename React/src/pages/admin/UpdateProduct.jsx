import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

// const UpdateProductPage = (props) => {
//     const { id } = useParams() // lấy id từ url
//     const [product, setProduct] = useState({}) // khởi tạo state để lưu giá trị input
//     const [inputValue, setInputValue] = useState({}) // khởi tạo state để lưu giá trị input
//     useEffect(() => { // hàm này chạy sau khi render
//         const currentProduct = props.products.find(item => item.id == id) // tìm sản phẩm có id trùng với id trên url
//         setProduct(currentProduct) // gán lại giá trị cho state (product)
//     })
//     const onHandleChange = (e) => { // hàm xử lý sự kiện khi input thay đổi
//         const { name, value } = e.target   // lấy name và value của input
//         setInputValue({ ...inputValue, [name]: value }); // gán lại giá trị cho state (inputValue)
//     }
//     const onHandleSubmit = (e) => { // hàm xử lý sự kiện khi submit form
//         e.preventDefault()
//         const updateData = { ...product, ...inputValue } // gộp 2 object lại với nhau
//         /*
//             product:
//                 id
//                 name
//                 price
//             inputValue:
//                 id
//                 name
//                 price
//         */
//         props.onUpdate(updateData); // gọi hàm onUpdate từ props để cập nhật sản phẩm
//     }
//     return (
//         <div>
//             <form action="" onSubmit={onHandleSubmit}>
//                 <input type="text" defaultValue={product?.name} onChange={onHandleChange} name='name' />
//                 <input type="number" defaultValue={product?.price} onChange={onHandleChange} name='price' />
//                 <button type="submit">Update Product</button>
//             </form>
//         </div>
//     )
// }


const UpdateProductPage = (props) => {
    const navigate = useNavigate() // khởi tạo navigate để điều hướng
    const { register, handleSubmit, reset } = useForm()
    const { id } = useParams() // lấy id từ url
    useEffect(() => { // hàm này chạy sau khi render
        const currentProduct = props.products.find(item => item.id == id) // tìm sản phẩm có id trùng với id trên url
        reset(currentProduct)
    }, [props])
    const onHandleSubmit = data => {
        props.onUpdate(data);
        navigate('/admin/products')
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register('name')} />
                <input type="number" {...register('price')} />
                <button type="submit">Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProductPage