import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyles } from '../../styles/theme'
import * as S from './styles'
import Nav from '../Nav'
import Social from '../Social'
import Footer from '../Footer'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <S.LayoutWrapper>
      <Nav />
      <main>{children}</main>
      <Social />
      <Footer />
    </S.LayoutWrapper>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
