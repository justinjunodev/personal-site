import React from 'react'
import usePosts from '../../hooks/usePosts'
import Link from '../Link'

const PostFeed = () => {
  const posts = usePosts()
  return (
    <div>
      {posts.map(post => (
        <article key={post.slug}>
          <Link to={`/blog/${post.slug}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.excerpt}</p>
          <p>
            <small>Posted on {post.date}</small>
          </p>
        </article>
      ))}
    </div>
  )
}

export default PostFeed
