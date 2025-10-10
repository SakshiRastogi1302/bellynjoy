import React from 'react'
import { Link } from 'react-router-dom'
import bellynjoyLogo from "../assets/bellynjoy-logo.png"

const HeaderComponent = () => {

  const user = {
    name:"Sakshi"
  }

  const cart = {
    totalCount:5
  }

  const logout = () => {

  }


  return (
    <header className='bg-white border-b-2 border-solid border-[#e72929]'>
      <nav className='flex justify-between'>
        <Link to="/"><img src={bellynjoyLogo} alt='BellynJoy Logo' className='w-28 h-16'></img></Link>
        <ul className='flex items-center space-x-4 px-2'>
          <li>
            <select className='cursor-pointer border rounded px-2 py-1'>
              <option value="name">{user.name}</option>
              <option value="profile">Profile</option>
              <option value="orders">Orders</option>
              <option value="logout">Logout</option>
            </select>
          </li>
          <li>
            <Link to='/' className='flex space-x-1'>
              <span><i className="fa-solid fa-cart-shopping"></i>Cart</span> 
              <span className='w-6 h-6 bg-[#e72929] text-white rounded-full flex justify-center'>{cart.totalCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComponent