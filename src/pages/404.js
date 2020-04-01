import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const NotFoundPage = () => (
  <Layout>
    <div className={{ marginTop: "120px" }}>
      <h1>Deze pagina is helaas niet gevonden</h1>
      <p>
        Ga terug naar <Link to="/">home</Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
