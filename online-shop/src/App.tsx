import React from 'react';
import logo from './logo.svg';
import Products from './components/Products'
import './App.css';


const products = [{name: "product1", details: "details1"}, {name: "product2", details: "details2"}, {name: "product3", details: "details3"} , {name: "product4", details: "details4"}];

function App() {
  return (
    <div className="App">
      <header className="App-basic">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-basic">
        <h1 className="My-first-title">My Products:</h1>
        <p><Products products={products}/></p>
      </div>
    </div>
  );
}


export default App;
