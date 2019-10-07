module.exports = {
  siteMetadata: {
    title: "@flaex_ diseñador gráfico desarrollador front-end",
    titleTemplate: "%s · The Real Hero",
    description: "Portafolio y blog @flaex_ Freddy Polanía",
    keywords: "Diseño gráfico desarrollo fron-end pwa",
    author: "Freddy Polania",
    url: "https://www.flaex.netlify.com",
    image: "/seo-img.gif", 
    twitterUsername: "@Flaex_",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://flaex-cms.herokuapp.com"
          : "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "profile",
          "location",
          "skill",
          "link",
          "article",
          "work",
          "user",
          "position",
        ],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "@flaex_",
        short_name: "flaex",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    `gatsby-plugin-less`,
  ],
}
