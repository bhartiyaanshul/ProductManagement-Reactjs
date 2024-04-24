import React from 'react'
import './Product.css'

function Product({name, specification, price, product, deleteProduct}) {
  return (
    <div className='list-product'>
        <div className='product'>
            <span>Name: {name}</span>
            <span>Specification: {specification}</span>
            <span>Price: {price}</span>
            <button onClick={()=> deleteProduct(product.id)}>Delete</button>
        </div>
    </div>
  )
}

export default Product