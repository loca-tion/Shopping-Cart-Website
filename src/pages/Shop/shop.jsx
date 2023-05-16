import React from 'react'
import {PRODUCTS } from '../../Product'
import Product from './Product';
import "./shop.css";

function shop() {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1> Tech Shop</h1>
        </div>
        <div className='products'>{ PRODUCTS.map((product) => (
            <Product data={product}/>
        ))}</div>
    </div>
  )
}

export default shop