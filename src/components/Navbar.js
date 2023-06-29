import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row justify-between'>
        <img src="https://i.fbcd.co/products/original/2dc6bb26335da80bc3ce9f4ccb8aab41af083c279f43d9a59e11acdccf0909d7.jpg" alt='img' height="100px" width="100px" />

        <div className='flex'>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        
        <NavLink to="/cart">
          <FaShoppingCart/>
        </NavLink>

         
        </div>
      </div>
    </div>
  )
}

export default Navbar