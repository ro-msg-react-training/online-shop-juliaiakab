import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './Products';
import ProductDetails from './ProductDetails';
import products from './productArray';
import Divider from '@material-ui/core/Divider/Divider';
import ShoppingCart from './ShoppingCart';

const Main = () => (
  <main>
    <Divider/>
    <Switch>
      <Route path='/products/:id' component={ProductDetails}/>
      <Route path='/products'>
        <Products products={products}/>
      </Route>
      <Route path='/cart'>
        <ShoppingCart/>
      </Route>
      <Route exact path='/'>Home</Route>
    </Switch>
  </main>
)

export default Main