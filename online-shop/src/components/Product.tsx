import React from 'react';
import '../App.css';

function Product(props: { name: string; details: string; }) {
    return <li className="Single-product">{props.name}'s details: {props.details}</li>;
}

export default Product;