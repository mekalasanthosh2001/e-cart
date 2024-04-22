import React from 'react'
import { Link } from 'react-router-dom'

import '../Components/components.css'
const Navbar = () => {
  return (
   <>
   <div className='navbar'>
    <nav>

      <div className='logo'>
        E-CartApp
      </div>
      <div className='select-optn'> <select>
            <option>Groceries</option>
            <option>Electronics</option>
            <option>Fashion Dec</option>

          </select>
          </div>
          
      <div className='lists'>
       
         
        <ul >
         
        <li>  <Link to="/">Home</Link></li>
        <li>  <Link to="/login">Login</Link></li>
          <li> <Link to="/cart">Cart</Link></li>
          <li>  <Link to="/Category">Category</Link></li>
        </ul>
      </div>
    </nav>
   </div>
   </>
  )
}

export default Navbar
