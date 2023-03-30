import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"; //import useForm từ thư viện react-hook-form

// const AddProductPage = (props) => {
//     const navigate = useNavigate() // khởi tạo navigate để điều hướng
//     const [inputValue, setInputValue] = useState({}) // khởi tạo state để lưu giá trị input
//     const onHandleChange = (e) => { // hàm xử lý sự kiện khi input thay đổi
//         // const name = e.target.name; // lấy name của input
//         // const value = e.target.value// lấy value của input
//         const { name, value } = e.target
//         setInputValue({ ...inputValue, [name]: value }); // gán giá trị cho state

//         // setInputValue({ name: e.target.value });
//     }
//     const onHandleSubmit = (e) => { // hàm xử lý sự kiện khi submit form
//         e.preventDefault()
//         // console.log(inputValue);
//         props.onAdd(inputValue); // gọi hàm onAdd từ props để thêm sản phẩm
//         navigate('/admin/products')// điều hướng đến trang quản lý sản phẩm
//     }
//     return (
//         <div>
//             <form action="" onSubmit={onHandleSubmit}>
//                 <input type="text" placeholder='Product Name' onChange={onHandleChange} name='name' />
//                 <input type="number" onChange={onHandleChange} name='price' />
//                 <button type="submit">Add New Product</button>
//             </form>
//         </div>
//     )
// }



const AddProductPage = (props) => {
    const navigate = useNavigate() // khởi tạo navigate để điều hướng
    const { register, handleSubmit } = useForm();
    // khởi tạo useForm để lấy giá trị input
    // register: hàm để đăng ký input
    // handleSubmit: hàm để xử lý sự kiện submit form
    const onHandleSubmit = (data) => { // hàm xử lý sự kiện khi submit form, data là dữ liệu nhập vào input trong form
        props.onAdd(data);
        navigate('/admin/products')
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" placeholder='Product Name' {...register('name')} />
                <input type="number" {...register('price')} />
                <button type="submit">Add New Product</button>
            </form>
        </div>
    )
}


export default AddProductPage