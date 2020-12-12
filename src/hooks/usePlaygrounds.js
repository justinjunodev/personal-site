import { graphql, useStaticQuery } from 'gatsby'

const usePlaygrounds = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/src/playgrounds/" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          frontmatter {
            title
            sandbox
            date
          }
          body
        }
      }
    }
  `)

  return data.allMdx.nodes.map(playground => ({
    title: playground.frontmatter.title,
    sandbox: playground.frontmatter.sandbox,
    date: playground.frontmatter.date,
    body: playground.body,
  }))
}

export default usePlaygrounds
