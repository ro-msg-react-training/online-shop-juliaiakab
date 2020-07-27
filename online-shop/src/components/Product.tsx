import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function Product(props: { name: string; cathegory: string, price: number, details: string; }) {
    return (
        <TableRow>
            <TableCell align="left">{props.name}</TableCell>
            <TableCell align="left">{props.cathegory}</TableCell>
            <TableCell align="left">{props.price} RON</TableCell>
            <TableCell align="left">{props.details}</TableCell>
        </TableRow>
    );
}

export default Product;