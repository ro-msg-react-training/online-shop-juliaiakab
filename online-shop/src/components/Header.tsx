import React from 'react'
import '../css/Header.css'
import {Link, Route, Redirect} from 'react-router-dom'

const Header = () => (
  <header className="AppHeader">
    <h1 className="HeaderTitle">Online Shop</h1>
    <nav>
        <Link className="NavLink" to='/'><Route exact path="/"><Redirect to="/products" /></Route>Home</Link>
        <Link className="NavLink" to='/products'>Products</Link>
        <Link className="NavLink" to='/cart'>Shopping Cart</Link>
    </nav>
  </header>
)

export default Header