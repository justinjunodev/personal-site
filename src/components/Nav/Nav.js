import React from 'react'
import * as S from './styles'
import Link from '../Link'

const Nav = () => (
  <S.NavContent>
    <Link to="/">
      <S.NavLogo>Juno</S.NavLogo>
    </Link>
    <S.NavMenu>
      <S.NavMenuItem>
        <Link to="/about">About</Link>
      </S.NavMenuItem>
      <S.NavMenuItem>
        <Link to="/blog">Blog</Link>
      </S.NavMenuItem>
      <S.NavMenuItem>
        <Link to="/uses">Uses</Link>
      </S.NavMenuItem>
    </S.NavMenu>
  </S.NavContent>
)

export default Nav
