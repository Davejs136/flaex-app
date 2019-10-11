module.exports = {
  siteMetadata: {
    title: "Severus Snape",
    titleTemplate: "%s · The Real Hero",
    description:
      "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
    siteUrl: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
        options: {
          exclude: [`/page`, `/404.html`, `/thank-you`]
        }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {        
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },   
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-149595380-1`,
      },
    }, 
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