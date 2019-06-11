
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
/** @jsx jsx */
import {css,jsx} from '@emotion/core'
import containerStyles from "../pages/blog.module.less"


const WorkTemplate = ({ data }) => (

  <Layout>
    <div className={containerStyles.navsec}>
      <div
        css={css `
          text-decoration: underline !important;
          -webkit-filter: invert(1);
          filter: invert(1);
        `}
      >
        <Link to="/design">logo</Link>
      </div>
      <div>
      <Link to="/blog">prints</Link>
      </div>
      <div>
      <Link to="/blog">web design</Link>
      </div>
      <div>
      <Link to="/blog">typography</Link>
      </div>
    </div>
    <article>
      <h1>{data.strapiWork.title}</h1>
      <p>{data.strapiWork.description}</p>
      <Img fluid={data.strapiWork.thumbnail.childImageSharp.fluid} />
    </article>
  </Layout>

)

export default WorkTemplate

export const query = graphql`
  query WorkTemplate($id: String!) {
    strapiWork(id: { eq: $id }) {
      id
      title
      thumbnail {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
