import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../Nav'
import Social from '../Social'
import Footer from '../Footer'
import '../../styles/style.css'

const Layout = ({ children }) => (
  <>
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
