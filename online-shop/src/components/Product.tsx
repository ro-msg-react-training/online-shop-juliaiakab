import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import {Route, Link, Switch} from 'react-router-dom';
import ProductDetails from './ProductDetails';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import TableCell from '@material-ui/core/TableCell/TableCell';

const MyCellType = withStyles((theme: Theme) =>
  createStyles({
    body: {
      fontSize: 25,
    }
  }),
)(TableCell);

function Product(props: { id: string, name: string; category: string, price: number, details: string; }) {
    return (
        <TableBody>
            <TableRow>
                <MyCellType style={{fontSize: 20}} align="left">{props.name}</MyCellType>
                <MyCellType style={{fontSize: 20}} align="left">{props.category}</MyCellType>
                <MyCellType style={{fontSize: 20}} align="left">{props.price} RON</MyCellType>
                <MyCellType style={{fontSize: 20}} align="left"><Button color="primary"><Link to={`/products/${props.id}`}>Show more</Link></Button></MyCellType>
            </TableRow>
            <Switch>
                <Route path="/products/:id" component={ProductDetails}/>
            </Switch>
        </TableBody>
    );
}

export default Product;