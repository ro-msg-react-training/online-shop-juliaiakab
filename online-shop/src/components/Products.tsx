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
  overrides: {
    MuiTableHead: {
      root: {
        fontSize: 25,
        fontWeight: "bolder",
      }
    }
  }
});

const MyCellType = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    }
  }),
)(TableCell);


interface Props {
  products: Array<Object>,
}

interface State {
  products: Array<Object>,
}

class Products extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(products => this.setState({ products }));
  }

   render() {
    const {products} = this.state;
  
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
}
export default Products;