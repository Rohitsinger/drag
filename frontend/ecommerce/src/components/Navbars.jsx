import React, { useContext, useState } from 'react'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {NavLink} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



// import './NewPro/Navbar.css'
// import { ShopContext } from '../context/CartContext'
const Navbars = () => {
  // const GlobalState = useContext(ShopContext)
  // const state = GlobalState.state
//

const cart = useSelector(state=>state.cart)
  return (
    <>
    {/* <header>
    <h4 className='logo'> <BsFillCartCheckFill/> mCart</h4>
      <nav>

      <ul className='links'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>
         
          <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search"/>
        <div><span className="btn btn-primary" type="button">Search</span></div>
      </form>
        </ul>
     
      
     </nav>
     </header> */}

 <header className='header'>
  <div>
    <h1>
      <Link to="/" className="logo">
        MyCart
      </Link>
    </h1>
  </div>
  <div className='header-links'>
   <ul>
    <li className='link'><Link to="/">Home</Link></li>
   </ul>
   <ul>
    <li className='link'><Link to="/signup">SignUp</Link></li>
   </ul>
   <ul>
    <li className='link'><Link to="/profile">Profile</Link></li>
   </ul>
   <ul>
    <li><Link to="/cart"> <i > <FaShoppingCart size={32} style={{marginTop:"1.5rem",marginRight:"1rem"}}/>{cart.length}</i></Link></li>
   
   </ul>
  </div>
 </header>
      
    
    
    </>
  )
}

export default Navbars
