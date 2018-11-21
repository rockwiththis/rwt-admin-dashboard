import React from 'react'
import Link from 'next/link'

import './Nav.scss'


const navLinks = [
  {
    title: 'Songs',
    url: '/songs',
  },
  {
    title: 'Users',
    url: '/users',
  },
  {
    title: 'Upload',
    url: '/upload',
  },
]

const Nav = ({ isLoggedIn }) => {
  return (
    <nav className={'nav'}>
      <div className={'nav__content'}>
        <Link href={'/'}>
          <div className={'nav__logo'}>
            {'RockWithThis'}
          </div>
        </Link>
        <div className={'nav__links'}>
          {isLoggedIn && navLinks.map(({ title, url }) => (
            <Link href={url} key={url}>
              <a className={'nav__link'}>
                {title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Nav
