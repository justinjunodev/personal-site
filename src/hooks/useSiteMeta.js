import { graphql, useStaticQuery } from 'gatsby'

const useSiteMeta = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
      }
    `
  )

  return {
    title: site.siteMetadata.title,
    desc: site.siteMetadata.description,
    author: site.siteMetadata.author,
    url: site.siteMetadata.url,
  }
}

export default useSiteMeta
