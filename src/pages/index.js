import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Img from "gatsby-image"
import containerStyles from "./index.module.css"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faEnvelope, faKey);

const IndexPage = ({ data }) => (

    <section>
      <div className={containerStyles.menu}>
        <Header />
        <Navigation />
      </div>
      <ul>
        {data.allStrapiLink.edges.map(document => (
          <li key={document.node.id}>
            <FontAwesomeIcon
            icon="envelope"
          />
          </li>
        ))}
      </ul>
      <Footer />
    </section>

)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiLink {
      edges {
        node {
          id
          icon
          URL
        }
      }
    }
  }
`
