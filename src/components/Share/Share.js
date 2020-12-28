import React from 'react'
import PropTypes from 'prop-types'
import { TwitterShareButton, RedditShareButton } from 'react-share'
import Link from '../Link'
import * as S from './styles'

const Share = ({ title, url, devto }) => (
  <S.ShareContent>
    <S.ShareMessage>Did you find this post helpful?</S.ShareMessage>
    <S.ShareMenu>
      <S.ShareMenuItem>
        <Link to={devto} label="Bookmark article on Dev.to" isExternal>
          Love/ Bookmark on Dev.to
        </Link>
      </S.ShareMenuItem>
      <S.ShareMenuItem>
        <TwitterShareButton
          url={url}
          title={`I just read "${title}" on `}
          via="justinjunodev"
        >
          <span>Share Post on Twitter</span>
        </TwitterShareButton>
      </S.ShareMenuItem>
      <S.ShareMenuItem>
        <RedditShareButton url={url} title={title}>
          <span>Share Post on Reddit</span>
        </RedditShareButton>
      </S.ShareMenuItem>
    </S.ShareMenu>
  </S.ShareContent>
)

Share.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  devto: PropTypes.string.isRequired,
}

export default Share
