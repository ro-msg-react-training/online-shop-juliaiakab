import React from 'react';
import '../css/Product.css'
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import {Route, Link, Switch} from 'react-router-dom';
import ProductDetails from './ProductDetails';
import TableCell from '@material-ui/core/TableCell/TableCell';
import {createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
    overrides: {
      MuiTableCell: {
        root: {
          fontSize: 20,
        }
      }
    }
  });

const Product = (props: { id: string, name: string; category: string, price: number, details: string; }) => {
    return (
        <ThemeProvider theme={theme}>
            <TableBody>
                <TableRow>
                    <TableCell className="ProductTableCell" align="left">{props.name}</TableCell>
                    <TableCell className="ProductTableCell" align="left">{props.category}</TableCell>
                    <TableCell className="ProductTableCell" align="left">{props.price} RON</TableCell>
                    <TableCell className="ProductTableCell" align="left"><Button color="primary"><Link to={`/products/${props.id}`}>Show more</Link></Button></TableCell>
                </TableRow>
                <Switch>
                    <Route path="/products/:id" component={ProductDetails}/>
                </Switch>
            </TableBody>
        </ThemeProvider>
    );
}

export default Product;