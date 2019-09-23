import React from "react"
import Header from "../components/header"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"


library.add(fab, fas)

const IndexPage = () => (
  <div className="home">
    <div className="menu">
      <Header />
      <Navigation />
    </div>
    <Footer />
  </div>
)

export default IndexPage
