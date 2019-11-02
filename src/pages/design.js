import React from "react"
import Layout from "../components/layout"
import Logos from "./design/components/logosSlide"
import Prints from "./design/components/printsSlide"
import Web from "./design/components/webSlide"
import Typography from "./design/components/typographySlide"
import SEO from "../components/seo"
import "./slick.less"
import "./slick-theme.less"

const DesignPage = () => (
  <Layout>
    <SEO title="diseño gráfico" />
    <h1 className="hidden">diseño gráfico</h1>
    <p className="two-columns">
      Estos son algunos de los proyectos que he completado tales como creación de logos, branding impreso y digital en
      papelería comercial, catálogos, manuales de identidad gráfica, señalización y tipografía. En algunos casos fue posible combinar varias especialidades del diseño gráfico para crear identidades corporativas con herramientas diversas de comunicación visual.
    </p>
    <Logos title="logotipos" />
    <Prints title="impresos" />
    <Web title="web" />
    <Typography title="tipografía" />
  </Layout>
)

export default DesignPage
