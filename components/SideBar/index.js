import React from 'react'
import Link from 'next/link'
import './SideNav.scss'


const SideBar = () => {
  return (
    <div className="sidebar">
        <ul>
        <li><Link href="/">Songs</Link></li>
        <li><Link href="/subgenres">Subgenres</Link></li>
        <li><Link href="/curators">Curators</Link></li>
        </ul>
    </div>
  )
}

export default SideBar
