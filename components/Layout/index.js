import React from 'react'
import Nav from '../Nav'

import './Layout.scss'


const Layout = ({ children, isLoggedIn }) => {
  return (
    <div className={'layout'}>
      <Nav isLoggedIn={isLoggedIn} />
        <div className={'layout__content'}>
          {children}
        </div>
    </div>
  )
}

export default Layout
