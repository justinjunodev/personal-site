import React from 'react'
import {
  FaTwitter,
  FaGithubAlt,
  FaLinkedinIn,
  FaEnvelope,
} from 'react-icons/fa'
import * as S from './styles'
import Link from '../Link'

const Social = () => (
  <S.SocialMenu>
    <S.SocialMenuItem>
      <span>Let's Connect:</span>
    </S.SocialMenuItem>
    <S.SocialMenuItem>
      <Link
        to="https://twitter.com/justinjunodev"
        label="View @justinjunodev on Twitter"
        isExternal
      >
        <FaTwitter />
      </Link>
    </S.SocialMenuItem>
    <S.SocialMenuItem>
      <Link
        to="https://github.com/justinjunodev"
        label="View @justinjunodev on Github"
        isExternal
      >
        <FaGithubAlt />
      </Link>
    </S.SocialMenuItem>
    <S.SocialMenuItem>
      <Link
        to="https://www.linkedin.com/in/justinjunodev"
        label="View @justinjunodev on LinkedIn"
        isExternal
      >
        <FaLinkedinIn />
      </Link>
    </S.SocialMenuItem>
    <S.SocialMenuItem>
      <Link
        to="mailto:hello@justinjuno.dev"
        label="Send me an email!"
        isExternal
      >
        <FaEnvelope />
      </Link>
    </S.SocialMenuItem>
  </S.SocialMenu>
)

export default Social
