import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-blue-800'>
      <div className='flex flex-row justify-between'>
        <img src='' alt='img'></img>

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