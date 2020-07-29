import React from 'react';
import '../css/Product.css'
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell/TableCell';


const Product = (props: { id: string, name: string; category: string, price: number, quantity: string; }) => {
    return (
        <TableBody>
            <TableRow>
                <TableCell className="ProductTableCell" align="left">{props.name}</TableCell>
                <TableCell className="ProductTableCell" align="left">{props.category}</TableCell>
                <TableCell className="ProductTableCell" align="left">{props.price} RON</TableCell>
                <TableCell className="ProductTableCell" align="left">{props.quantity}</TableCell>
            </TableRow>
        </TableBody>
    );
}

export default Product;