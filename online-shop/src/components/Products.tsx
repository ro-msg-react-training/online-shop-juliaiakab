import React from 'react';
import '../App.css';
import Product from './Product'
import { withStyles, createStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
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
      fontSize: 18,
    }
  }),
)(TableCell);

function Products(props: { products: any }) {
  const products = props.products;
  const productList = products.map((product: any, index: string) =>
    <Product key={index} name={product.name} cathegory={product.cathegory} price={product.price} details={product.details} />
  );

  return (
    <ThemeProvider theme={myCustomTheme}>
      <TableContainer>
      <Table aria-label="simple table" className='Custom-table'>
        <TableHead>
          <TableRow>
            <MyCellType align="left">Name</MyCellType>
            <MyCellType align="left">Cathegory</MyCellType>
            <MyCellType align="left">Price</MyCellType>
            <MyCellType align="left">Details</MyCellType>
          </TableRow>
        </TableHead>
        <TableBody>
          {productList}
        </TableBody>
      </Table>
    </TableContainer>
  </ThemeProvider>
  );
}

export default Products;