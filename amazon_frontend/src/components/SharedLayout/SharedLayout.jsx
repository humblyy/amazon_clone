import React from 'react'
import Header from '../header/upper_header/Header'
import { Outlet } from 'react-router-dom'

function SharedLayout({children}) {
  return (
    <div>
        <Header/>
        {children}
        <Outlet/>
    </div>
  )
}

export default SharedLayout