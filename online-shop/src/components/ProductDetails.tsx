import React from 'react';
import { RouteComponentProps} from 'react-router-dom';
import products from './productArray';
import '../css/ProductDetails.css'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';

type TParams = { id: string };

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
       margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(5),
        fontSize: 25
    },
   }),
);

function ProductDetails({match}: RouteComponentProps<TParams>) {
    const productID = match.params.id;
    const selectedCategory = products.find(item => item.id === productID);
    const productName = selectedCategory?.name;
    const productPrice = selectedCategory?.price;
    const productCategory = selectedCategory?.category;
    const ProductDescription = selectedCategory?.description;
    const classes = useStyles();
   
    return (
        <div>
            <div className='ProductDetailsHeader'>
                <h1 className="ProductDetailsTitle"><b>Product:&nbsp;&nbsp;{productName}</b></h1>
                <Button variant="contained" color="secondary" className={classes.button} startIcon={<AddShoppingCartIcon/>}>
                    Add to cart
                </Button>
            </div>
            <Grid container className='ProductDetailsGrid' spacing={1}>
                <Grid className="ProductDetailsItem" item xs={6}>
                    Name:
                </Grid>
                <Grid className="ProductDetailsItem" item xs={6}>
                    {productName}
                </Grid>
                <Grid className="ProductDetailsItem" item xs={6}>
                    Category:
                </Grid>
                <Grid className="ProductDetailsItem" item xs={6}>
                    {productCategory}
                </Grid>
                <Grid className="ProductDetailsItem" item xs={6}>
                    Price:
                </Grid>
                <Grid className="ProductDetailsItem" item xs={6}>
                    {productPrice}
                </Grid>
                <Grid className="ProductDetailsItem" item xs={6}>
                    Description:
                </Grid>
                <Grid className="ProductDetailsItem" item xs={6}>
                    {ProductDescription}
                </Grid>
            </Grid>
        </div>
  );
}

export default ProductDetails;