import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import useSiteMeta from '../../hooks/useSiteMeta'
import Layout from '../Layout'
import Header from '../Header'
import Share from '../Share'
import SEO from '../SEO'

const Post = ({ data: { mdx: post } }) => {
  const meta = useSiteMeta()
  const source = `${meta.url}/blog/${post.frontmatter.slug}`
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Header title="Blog." />
      <article>
        <h2>{post.frontmatter.title}</h2>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
      <Share title={post.frontmatter.title} url={source} />
    </Layout>
  )
}

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
