import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const Header = ({ title, children }) => (
  <S.HeaderContent>
    <S.HeaderHeading>{title}</S.HeaderHeading>
    {children && <S.HeaderText>{children}</S.HeaderText>}
    <hr />
  </S.HeaderContent>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Header
