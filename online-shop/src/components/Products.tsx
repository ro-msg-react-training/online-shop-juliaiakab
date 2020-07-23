import React from 'react';
import '../App.css';
import Product from './Product'

function Products(props: { products: any; }) {
    const products = props.products;
    const productList = products.map((product: any, index: string) =>
      <Product key={index} name={product.name} details={product.details} />
    );
    return (
      <ul className="Product-list">
        {productList}
      </ul>
    );
}

export default Products;