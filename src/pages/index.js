import React from "react"
import Header from "../components/header"
import Navigation from "../components/navigation"
import Links from "../components/links"
import Footer from "../components/footer"
import containerStyles from "./index.module.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const IndexPage = () => (

    <main>
      <div className={containerStyles.menu}>
        <Header />
        <Navigation />
      </div>
      <Links />
      <Footer />
    </main>

)

export default IndexPage
