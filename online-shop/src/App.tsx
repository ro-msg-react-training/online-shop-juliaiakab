import React from 'react';
import Products from './components/Products'
import './App.css';

const products = [{name: "product1", cathegory: "cat1", price: 1, details: "details1"}, {name: "product2", cathegory: "cat2", price: 2,  details: "details2"}, {name: "product3", cathegory: "cat3", price: 3, details: "details3"} , {name: "product4", cathegory: "cat4", price: 4, details: "details4"}];

function App() {
  return (
    <div className="App">
      <div className="App-basic">
        <h1 className="My-first-title">Products</h1>
        <p><Products products={products}/></p>
      </div>
    </div>
  );
}


export default App;
