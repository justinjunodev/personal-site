import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title, children }) => (
  <header>
    <h1>{title}</h1>
    {children && <p>{children}</p>}
    <hr />
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Header
