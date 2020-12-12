import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/src/posts/" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          frontmatter {
            slug
            title
            date
          }
          excerpt
        }
      }
    }
  `)

  return data.allMdx.nodes.map(post => ({
    slug: post.frontmatter.slug,
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    excerpt: post.excerpt,
  }))
}

export default usePosts
