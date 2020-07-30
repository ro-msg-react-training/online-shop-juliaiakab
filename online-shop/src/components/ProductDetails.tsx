import React from 'react';
import { RouteComponentProps} from 'react-router-dom';
import '../css/ProductDetails.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import Button from '@material-ui/core/Button';
import SingleDetail from './SingleDetail';
import shoppingList from './ShoppingList';


type TParams = { id: string };

interface State {
    productId: string,
    productName: string,
    productPrice: number,
    productCategory: string,
    productDescription: string,
    isDeleted: boolean,
}

class ProductDetails extends React.Component<RouteComponentProps<TParams>, State> {
    constructor(props: RouteComponentProps<TParams>) {
        super(props);

        this.state = {
            productId: this.props.match.params.id,
            productName: "",
            productPrice: 0,
            productCategory: "", 
            productDescription: "",
            isDeleted: false,
        
        }
    }

    componentDidMount() {
        fetch(`http://localhost:4000/products/${this.state.productId}`)
          .then(response => response.json())
          .then(productDetails => this.setState({ productName: productDetails.name, productPrice: productDetails.price, productCategory: productDetails.category, productDescription: productDetails.description }));
    }
    
    deleteItem = () => {
        fetch(`http://localhost:4000/products/${this.state.productId}`, {
            method: 'DELETE',
        }).then(() => this.setState({ isDeleted: true }));
    };

    addToCart = () => {
        console.log("hello");
        let found = false;
        const quantity = 1;
        const {productId, productName, productCategory, productPrice} = this.state;
        
        for (let entry of shoppingList) {
            if (entry.productId === productId) {
                entry.quantity++;
                found = true;
                break;
            }
        }
        if (!found) {
            shoppingList.push({productId, productName, productCategory, productPrice, quantity});
        }
        console.log(shoppingList);
    }
       
    render() {
        return (
            <div>
                <div className='ProductDetailsHeader'>
                    <h1 className="ProductDetailsTitle">
                        <b> Product:&nbsp;&nbsp;&nbsp;{this.state.productName}</b>
                    </h1>
                    <Button variant="contained" color="secondary" className="AddToCartButton" startIcon={<AddShoppingCartIcon/>} onClick={this.addToCart}>
                        Add to cart
                    </Button>
                    <Button variant="contained" color="secondary" className="DeleteButton" startIcon={<DeleteIcon/>} onClick={this.deleteItem}>
                        Delete
                    </Button>
                </div>
                    <SingleDetail title="Name:" data={this.state.productName}/>
                    <SingleDetail title="Category:" data={this.state.productCategory}/>
                    <SingleDetail title="Price:" data={"" + this.state.productPrice}/>
                    <SingleDetail title="Description:" data={this.state.productDescription}/>   
                    <p className="DeleteMessage">{this.state.isDeleted ? ' Successfully Deleted!' : ''}</p>
            </div>
      );
    }
}

export default ProductDetails;