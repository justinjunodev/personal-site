import React from 'react'
import * as S from './styles'
import Social from '../Social'

const Footer = () => (
  <S.FooterContent>
    <Social />
    <S.FooterLegal>
      All Rights Reserved &copy; {new Date().getFullYear()}
    </S.FooterLegal>
  </S.FooterContent>
)

export default Footer
