import React from "react"
import Layout from "../components/layout"
import Fend from "./development/components/fendSlide"
import Cms from "./development/components/cmsSlide"
import SEO from "../components/seo"
import "./slick.less"
import "./slick-theme.less"

const DevelopmentPage = () => (
  <Layout>
    <SEO title="diseño gráfico" />
    <h1 className="hidden">desarrollo front-end</h1>
    <p className="two-columns">
      Aquí podrán ver muestras de proyectos en lo que he participado y dirigido tales como sitios web estáticos y dinámicos, implementación de templates en CMS propietarios y open source, desarrollo de aplicaciones PWA en librerías front-end utilizando HTML5, CSS3 y Javascript. En varios de estos trabajos pude combinar especialidades del diseño gráfico y del desarrollo web para crear aplicaciones que funcionan como extensiones de la identidad gráfica.
    </p>
    <Fend title="front-end" />
    <Cms title="temas CMS" />
  </Layout>
)

export default DevelopmentPage
