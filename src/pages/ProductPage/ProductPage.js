import React, { useState } from 'react'
import './ProductPage.css'

function ProductPage() {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Product 1',
            price: 100,
            specification: 'Product 1 specification'
        },
        {
            id: 2,
            name: 'Product 2',
            price: 100,
            specification: 'Product 2 specification'
        },
        {
            id: 3,
            name: 'Product 3',
            price: 100,
            specification: 'Product 3 specification'
        },
    ])
    const [name, setName] = useState('')
    const [specification, setSpecification] = useState('')
    const [price, setPrice] = useState(0)
    const [selectedId, setSelectedId] = useState(0)

    function handleName(e) {
        setName(e.target.value)
    }

    function handleSpecification(e) {
        setSpecification(e.target.value)
    }

    function handlePrice(e) {
        setPrice(e.target.value)
    }

    function handleProduct() {
        setProducts((val) => {
            return [...val, { id: val.length + 1, name: name, specification: specification, price: price }]
        })

        setName('')
        setPrice(0)
        setSpecification('')
    }

    function handleDeleteProduct(id) {
        setProducts((val) => {
            return val.filter((product) => product.id !== id)
        })
    }

    function handleEditProduct(id) {
        let product = products.find((product) => {
            return product.id === id
        })

        setName(product.name)
        setSpecification(product.specification)
        setPrice(product.price)
        setSelectedId(id)
    }

    function onEditProduct(id) {
        setProducts((val) => {
            return val.map((product) => {
                if (product.id === id) {
                    return { id: id, name: name, specification: specification, price: price }
                }
                else {
                    return product
                }
            })
        })
        setName('')
        setSpecification('')
        setPrice(0)
        setSelectedId(0)
    }


    return (
        <div className='product-manager-application'>
            <div className='product-grid'>
                {
                    products.map((product, index) => {
                        return (
                            <div className='product-card'>
                                <span>Name: {product.name}</span>
                                <span>Specification: {product.specification}</span>
                                <span>Price: {product.price}</span>
                                <div className='product-actions'>
                                    <button className='button edit'onClick={() => handleEditProduct(product.id)}>Edit</button>
                                    <button className='button delete' onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='product-add-container'>
                    <input type='text' value={name} onChange={handleName} placeholder='Name'></input>
                    <input type='text' value={specification} onChange={handleSpecification} placeholder='Specification'></input>
                    <input type='number' value={price} onChange={handlePrice} placeholder='Price'></input>
                    {
                        selectedId === 0 ?
                            <button className='button add'type='submit' onClick={handleProduct}>ADD</button> :
                            <button className='button edit'type='submit' onClick={() => onEditProduct(selectedId)}>Edit</button>
                    }
            </div>
        </div>

    );
};
export default ProductPage