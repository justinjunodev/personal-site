exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/src/posts/" } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(post => {
    actions.createPage({
      path: `/blog/${post.frontmatter.slug}`,
      component: require.resolve('./src/components/Post/Post.js'),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}
