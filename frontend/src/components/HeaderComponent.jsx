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
    <div>
      <header className='bg-white border-b-2 border-solid border-[#e72929]'>
        <div className='flex justify-between'>
          <img src={bellynjoyLogo} alt='BellynJoy Logo' className='w-28 h-16'></img>
          <ul className='flex items-center pr-2'>
            <li className='mr-2'>
              <select className='cursor-pointer'>
                <option value="name">{user.name}</option>
                <option value="profile">Profile</option>
                <option value="orders">Orders</option>
                <option value="logout">Logout</option>
              </select>
            </li>
            <li className='mr-[2px]'>Cart</li>
            <li className='w-6 h-6 bg-[#e72929] text-white rounded-full flex justify-center'>{cart.totalCount}</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default HeaderComponent