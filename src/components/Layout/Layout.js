import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../Nav'
import Social from '../Social'
import Footer from '../Footer'
import { GlobalStyles } from '../../styles/theme'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Nav />
    <main>{children}</main>
    <Social />
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
