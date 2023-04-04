import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Space, Table, Tag, Button } from 'antd';

const ProductManagementPage = (props) => {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     setData(props.products)
    // }, [props])
    // const removeProduct = (id) => {
    //     props.onRemove(id)
    // }

    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price',
            render: (val) => <span>{val}</span>
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }}>Remove</Button>
                </Space>
            ),
        },
    ];

    const products = [
        {
            key: '1',
            name: 'John Brown',
            price: 100
        },
        {
            key: '2',
            name: 'Jim Green',
            price: 100
        },
        {
            key: '3',
            name: 'Joe Black',
            price: 100
        },
    ];

    return <Table columns={columns} dataSource={products} pagination={{ pageSize: 1 }} />
}

export default ProductManagementPage