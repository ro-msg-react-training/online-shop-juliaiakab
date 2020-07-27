import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './Products';
import Details from './Details';
import products from './productArray';
import Divider from '@material-ui/core/Divider/Divider';

const Main = () => (
  <main className="Main-style">
    <Divider/>
    <Switch>
      <Route path='/products/:id' component={Details}/>
      <Route path='/products'>
        <Products products={products}/>
      </Route>
      <Route exact path='/'>Home</Route>
    </Switch>
  </main>
)

export default Main