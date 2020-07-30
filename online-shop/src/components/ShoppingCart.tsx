import React from 'react'
import CartItem from './CartItem';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import '../css/ShoppingCart.css'
import shoppingList from './ShoppingList';
import Button from '@material-ui/core/Button/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

interface Props {
}

interface State {
    ordered: boolean,
    cart: OrderType,
    error: boolean,
}

interface OrderType {
    customer: string,
    products: Array<object>,
}


const theme = createMuiTheme({
    overrides: {
      MuiTableCell: {
        root: {
          fontSize: 20,
        },
        head: {
            color: 'white',
            backgroundColor: '#a01441',
        }
      },
    }
});


class ShoppingCart extends React.Component<Props, State> {
   
    constructor(props: Props) {
        super(props)

        this.state = {
            cart: {
                customer: "doej",
                products: [],
            },
            ordered: false,
            error: false,
        }
    }

    checkout = () => {
        let {cart} = this.state; 
        cart.products = [];
        for (let entry of shoppingList) {
            cart.products.push((({ productId, quantity }) => ({ productId, quantity }))(entry));
        }
        this.setState({cart})
        
        fetch("http://localhost:4000/orders", {
            method: 'POST',
            body: JSON.stringify(this.state.cart),
        }).then(response => {
            if(response.ok) {
                this.setState({ ordered: true })
            } else {
                throw new Error('Something went wrong ...');
            }
        }).catch(error => this.setState({ error: true }));
    }


    render() {
        const itemList = shoppingList.map((product: any) =>
            <CartItem key={product.id} id={product.productId} name={product.productName} category={product.productCategory} price={product.productPrice} quantity={product.quantity} />
        );

        return (
            <div>
                <div className="CartHeader">
                    <h1 className="CartTitle">Shopping Cart</h1>
                    <Button variant="contained" color="secondary" className="CheckoutButton" startIcon={<AddShoppingCartIcon/>} onClick={this.checkout}>
                        Checkout
                    </Button>
                </div>
                <ThemeProvider theme={theme}>
                    <TableContainer>
                        <Table aria-label="simple table" className='CartTable'>
                            <TableHead>
                            <TableRow>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Category</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Quantity</TableCell>
                            </TableRow>
                            </TableHead>
                            {itemList}
                        </Table>
                    </TableContainer>
                </ThemeProvider>
                <p className="OrderMessage">{this.state.ordered ? 'Order Sent!' : ''}</p>
                <p className="OrderMessage">{this.state.error ? 'Something went wrong...' : ''}</p>
            </div>
          );
    }
}

export default ShoppingCart;