import React from 'react'
import Nav from '../Nav'

import './Layout.scss'


const Layout = ({ children, user }) => {
  return (
    <div className={'layout'}>
      <Nav user={user} />
        <div className={'layout__content'}>
          {children}
        </div>
    </div>
  )
}

export default Layout
