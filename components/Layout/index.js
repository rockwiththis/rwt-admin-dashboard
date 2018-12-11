import React from 'react'
import Header from '../Header'

import './Layout.scss'


const Layout = ({ children, isLoggedIn }) => {
  return (
    <div className={'layout'}>
      <Header isLoggedIn={isLoggedIn} />
        <div className={'layout__content'}>
          {children}
        </div>
    </div>
  )
}

export default Layout
