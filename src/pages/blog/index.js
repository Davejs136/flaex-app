import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { injectIntl } from "gatsby-plugin-intl-graphql"

const ReactMarkdown = require("react-markdown/with-html")

const BlogPage = ({ intl: { messages } }) => (
  <Layout>
    <StaticQuery
      query={graphql`
        query BlogTemplate {
          allStrapiArticle {
            edges {
              node {
                id
                slug
                date(formatString: "DD MMMM YYYY")
                image {
                  childImageSharp {
                    fluid(maxWidth: 1100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          <SEO
            title={messages.static.views.blog.seo_title}
            description={messages.static.views.blog.seo_description}
            keywords={messages.static.views.blog.seo_keywords}
          />
          <h1>{messages.static.views.blog.title} </h1>         
          <ul className="articles">
            {data.allStrapiArticle.edges.map(document => (
              <li key={document.node.id}>
                 {console.log(document.node.id.slice(8))}
                <Link
                  to={`${messages.static.lang}/blog/${document.node.slug
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  <div className="mainImage">
                    <Img fluid={document.node.image.childImageSharp.fluid} />
                  </div>
                </Link>                
                {messages.articles
                  .filter(item => item.id === document.node.id.slice(8))
                  .map(item => (
                    <div key={item.id}>
                      <h2>
                        <Link
                          to={`${messages.static.lang}/blog/${document.node.slug
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`}
                          aria-label={`${messages.static.views.blog.go_to} ${item.content.title}`}
                        >
                          {item.content.title}
                        </Link>
                      </h2>
                      <time>{document.node.date}</time>
                      <ReactMarkdown
                        className="excerpt"
                        source={item.content.description
                          .substring(0, 80)
                          .concat("...")}
                        escapeHtml={false}
                      />
                       <Link
                          to={`${messages.static.lang}/blog/${document.node.slug
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`}
                          aria-label={`${messages.static.views.blog.go_to} ${item.content.title}`}
                          className="excerpt-link"
                        >
                          {messages.static.views.blog.more} 
                        </Link>
                    </div>
                ))}   
              </li>
            ))}
          </ul>
        </div>
      )}
    />
  </Layout>
)

export default injectIntl(BlogPage)
