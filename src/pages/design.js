import React from "react"
import Layout from "../components/layout"
import Logos from "../components/logosSlide"
import Prints from "../components/printsSlide"
import Web from "../components/webSlide"
import Typography from "../components/typographySlide"
import SEO from "../components/seo"
import "./slick.less";
import "./slick-theme.less";

const DesignPage = () => (
  <Layout>
    <SEO title="diseño gráfico" />
    <h1 className="hidden">diseño gráfico</h1>
    <Logos title="logotipos" />
    <Prints title="impresos" />
    <Web title="web" />
    <Typography title="typografía" />
    
    
  </Layout>
)

export default DesignPage
