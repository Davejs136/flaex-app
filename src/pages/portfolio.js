import React from "react"
import Layout from "../components/layout"
import Logos from "./portfolio/design/components/logosSlide"
import Prints from "./portfolio/design/components/printsSlide"
import Web from "./portfolio/design/components/webSlide"
import Typography from "./portfolio/design/components/typographySlide"
import Fend from "./portfolio/development/components/fendSlide"
import Cms from "./portfolio/development/components/cmsSlide"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome icons
import { faPalette } from "@fortawesome/free-solid-svg-icons"
import { faSimplybuilt } from "@fortawesome/free-brands-svg-icons"
// Styles for react-slick
import "./slick.less"
import "./slick-theme.less"

// This portfolio page needs the files in 'scr/pages/design' and 'scr/pages/development' in order to render properly

const PortfolioPage = () => (
  <Layout>
    <SEO title="diseño gráfico" />
    <h1 className="hidden">portafolio</h1>
    <section>
      <h2 className="no-top">
        <FontAwesomeIcon icon={faPalette} fixedWidth size="1x" /> Diseño gráfico
      </h2>

      <p className="two-columns">
        Creación de logos, branding impreso y digital en papelería comercial,
        catálogos, manuales de identidad gráfica, señalización y tipografía. En
        algunos casos fue posible combinar varias especialidades para crear
        identidades corporativas en diversas medios de la comunicación visual.
      </p>
      <Logos title="logotipos" />
      <Prints title="impresos" />
      <Web title="web" />
      <Typography title="tipografía" />
    </section>
    <section>
      <h2>
        <FontAwesomeIcon icon={faSimplybuilt} fixedWidth size="1x" /> Desarrollo
        front-end
      </h2>
      <p className="two-columns">
        Sitios web estáticos y dinámicos, implementación de templates en CMS
        propietarios y open source, desarrollo de aplicaciones PWA en librerías
        front-end utilizando HTML5, CSS3 y Javascript. En varios de estos
        trabajos pude combinar especialidades del diseño gráfico y del
        desarrollo web para crear aplicaciones que funcionan como extensiones de
        la identidad gráfica.
      </p>
      <Fend title="front-end" />
      <Cms title="temas CMS" />
    </section>
  </Layout>
)

export default PortfolioPage
