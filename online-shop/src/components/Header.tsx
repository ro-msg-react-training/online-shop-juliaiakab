import React from 'react'
import {Link, Route, Redirect} from 'react-router-dom'

const Header = () => (
  <header className="header">
    <h1 className="Title">Online Shop</h1>
    <nav>
        <Link className="link" to='/'><Route exact path="/"><Redirect to="/products" /></Route>Home</Link>
        <Link className="link" to='/products'>Products</Link>
        <Link className="link" to='/cart'>Shopping Cart</Link>
    </nav>
  </header>
)

export default Header