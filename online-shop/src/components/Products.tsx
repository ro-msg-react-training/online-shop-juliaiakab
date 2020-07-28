import React from 'react';
import '../css/Products.css';
import Product from './Product';
import { withStyles, createStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { createMuiTheme } from '@material-ui/core/styles';

const myCustomTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#a01441',
    },
  },
});

const MyCellType = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontSize: 25,
      fontStyle: 'bold',
    }
  }),
)(TableCell);

function Products(props: { products: any }) {
  const products = props.products;
  const productList = products.map((product: any) =>
    <Product key={product.id} id={product.id} name={product.name} category={product.category} price={product.price} details={product.details} />
  );
  
  return (
    <ThemeProvider theme={myCustomTheme}>
      <h1 className="ProductsTitle">Products</h1>
      <TableContainer>
      <Table aria-label="simple table" className='ProductTable'>
        <TableHead>
          <TableRow>
            <MyCellType align="left">Name</MyCellType>
            <MyCellType align="left">Category</MyCellType>
            <MyCellType align="left">Price</MyCellType>
            <MyCellType align="left">Details</MyCellType>
          </TableRow>
        </TableHead>
        {productList}
      </Table>
    </TableContainer>
  </ThemeProvider>
  );
}

export default Products;