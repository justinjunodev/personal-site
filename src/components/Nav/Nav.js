import React from 'react'
import Link from '../Link'

const Nav = () => (
  <nav>
    <Link to="/">
      <span>Juno</span>
    </Link>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/uses">Uses</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
