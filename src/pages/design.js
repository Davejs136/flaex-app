import React from "react"
import Layout from "../components/layout"
import Logos from "../components/logosSlide"
import Prints from "../components/printsSlide"
import Web from "../components/webSlide"
import Typography from "../components/typographySlide"
import SEO from "../components/seo"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DesignPage = () => (
  <Layout>
    <SEO title="diseño gráfico" />
    <h1 className="hidden">diseño gráfico</h1>
    <Logos title="logotipos" />
    
    
  </Layout>
)

export default DesignPage
