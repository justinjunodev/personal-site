import React from 'react'
import usePosts from '../../hooks/usePosts'
import Link from '../Link'

const PostFeed = () => {
  const posts = usePosts()
  return (
    <>
      {posts.map(post => (
        <article key={post.slug}>
          <Link to={`/blog/${post.slug}`}>
            <h3>{post.title}</h3>
          </Link>
          <span>Posted on {post.date}.</span>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </>
  )
}

export default PostFeed
