import React from 'react'
import usePosts from '../../hooks/usePosts'
import Link from '../Link'
import * as S from './styles'

const PostFeed = () => {
  const posts = usePosts()
  return (
    <>
      {posts.map(post => (
        <S.PostContent key={post.slug}>
          <Link to={`/blog/${post.slug}`}>
            <S.PostHeading>{post.title}</S.PostHeading>
          </Link>
          <S.PostDate>Posted on {post.date}.</S.PostDate>
          <S.PostExcerpt>{post.excerpt}</S.PostExcerpt>
        </S.PostContent>
      ))}
    </>
  )
}

export default PostFeed
