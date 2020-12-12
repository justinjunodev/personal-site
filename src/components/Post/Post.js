import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../Layout'
import SEO from '../SEO'

const Post = ({ data: { mdx: post } }) => (
  <Layout>
    <SEO title={post.frontmatter.title} />
    <h1>Blog.</h1>
    <article>
      <h2>{post.frontmatter.title}</h2>
      <MDXRenderer>{post.body}</MDXRenderer>
    </article>
  </Layout>
)

Post.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Post

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        date
      }
      body
    }
  }
`
