import React from 'react'
import Header from '../Header'
import SideBar from '../SideBar'

import './Layout.scss'


const Layout = ({ children, isLoggedIn }) => {
  return (
    <div className={'layout'}>
      <Header isLoggedIn={isLoggedIn} />
      <SideBar />
        <div className={'layout__content'}>
          {children}
        </div>
    </div>
  )
}

export default Layout
