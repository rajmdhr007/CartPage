import React from 'react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const NavBar = () => {
    const no_of_items_in_cart=useSelector(store=>store.cartStore.cart_items.length)
 

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Our store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="cart">CART</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">no.of cart items{no_of_items_in_cart }</Link>
          </li>
    
      </ul>
    </div>
  </div>
</nav>
    </>
   
   
  )
}

export default NavBar