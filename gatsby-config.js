require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Diseñador gráfico & desarrollador front-end",
    titleTemplate: "%s · @flaex_",
    description: "Portafolio & blog | Freddy Polanía",
    keywords: "Diseño gráfico desarrollo fron-end pwa",
    author: "Freddy Polania",
    siteUrl: "https://flaex.netlify.com",
    image: "/seo-img.jpg",
    twitterUsername: "@Flaex_",
  },
  plugins: [
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
        apiURL: "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "article",
          "link",
          "location",
          "profile",
          "skill",
          "user",
          "video",
          "work",
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        prefixDefault: false,
      }
    },
    {
      resolve: 'gatsby-plugin-i18n-duplicate',
      options: {
        path: `${__dirname}/src/pages`,
        languages: ['es'],
        defaultLanguage: 'en',
        files : [
          '404',
          'index',
          'about-me',          
        ] 
      }
    },
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
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    `gatsby-plugin-less`,
  ],
}
