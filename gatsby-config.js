module.exports = {
  siteMetadata: {
    title: `Justin Juno`,
    description: `My name is Justin Juno. I'm an experienced Frontend Developer and UI Designer from East Texas. Here you can learn more about me, peruse the beginnings of a blog, and explore my playground.`,
    author: `@justinjunodev`,
    url: `https://www.justinjuno.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`work sans:400,400i,500,500i,700,700i`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-axe',
      options: {
        debounce: 1000,
        showInProduction: false,
      },
    },
  ],
}
