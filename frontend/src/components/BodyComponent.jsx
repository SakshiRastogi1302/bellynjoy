import React from 'react'
import HeaderComponent from './HeaderComponent'
import { Outlet } from 'react-router-dom'

const BodyComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  )
}

export default BodyComponent