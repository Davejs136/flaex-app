const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  /* const getArticles = makeRequest(
    graphql,
    `
    {
      allStrapiArticle {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.slug.replace(/\s+/g, "-").toLowerCase()}`,        
        component: path.resolve(`src/templates/article.js`),
        context: {
          id: node.id,
        },
      })
    })
  }) */

  const getWorks = makeRequest(
    graphql,
    `
    {
      allStrapiWork {
        edges {
          node {
            id          
            category
            subcategory
            slug
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiWork.edges.forEach(({ node }) => {
      createPage({
        path: `/portfolio/${node.category}/${node.subcategory}/${node.slug
          .replace(/\s+/g, "-")
          .toLowerCase()}`,
        component: path.resolve(`src/pages/portfolio/templates/work.js`),
        context: {
          id: node.id,
        },
      })
    })
  })

  // Queries for articles and authors nodes to use in creating pages.
  return Promise.all([getWorks])
}
