import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
    <NavBar />
    <Outlet />
        
    </div>
  )
}

export default AppLayout