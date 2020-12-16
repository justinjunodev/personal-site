import React from 'react'
import PropTypes from 'prop-types'
import { TwitterShareButton, RedditShareButton } from 'react-share'
import * as S from './styles'

const Share = ({ title, url }) => (
  <S.ShareContent>
    <S.ShareMessage>
      <strong>Did you find this post helpful? </strong>
      <TwitterShareButton
        url={url}
        title={`I just read "${title}" on `}
        via="justinjunodev"
      >
        <span>Share it on Twitter</span>
      </TwitterShareButton>
      {' | '}
      <RedditShareButton url={url} title={title}>
        <span>Share it on Reddit</span>
      </RedditShareButton>
    </S.ShareMessage>
  </S.ShareContent>
)

Share.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Share
