import React from 'react'
import Nav from '../Nav'

import './Layout.scss'


const Layout = ({ children }) => {
  return (
    <div className={'layout'}>
      <Nav />
        <div className={'layout__content'}>
          {children}
        </div>
    </div>
  )
}

export default Layout
