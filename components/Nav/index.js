import React from 'react'
import Link from 'next/link'

import './Nav.scss'


const navLinks = [
  {
    title: 'Upload',
    url: '/upload',
  },
  {
    title: 'Songs',
    url: '/songs',
  },
  {
    title: 'Users',
    url: '/users',
  },
]

const Nav = () => {
  return (
    <nav className={'nav'}>
      <div className={'nav__logo'}>
        {'RockWithThis'}
      </div>
      <div className={'nav__links'}>
        {navLinks.map(({ title, url }) => (
          <Link href={url} key={url}>
            <a className={'nav__link'}>
              {title}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Nav
