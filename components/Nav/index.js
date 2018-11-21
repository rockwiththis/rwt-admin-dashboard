import React from 'react'
import Link from 'next/link'
import { signOut } from '../../api/auth/cognito'
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
  {
    title: 'Sign Out',
    action: signOut,
  }
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
          {isLoggedIn && navLinks.map(({ title, url, action }) => (
            url
              ? (
                <Link href={url} key={title}>
                  <a className={'nav__link'}>
                    {title}
                  </a>
                </Link>
              )
              : (
                <div className={'nav__link'} key={title} onClick={action}>
                  {title}
                </div>
              )
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Nav
