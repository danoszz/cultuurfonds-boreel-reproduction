import React from "react"

import SearchFilter from "../../components/SearchFilter/index"
import Layout from "../../components/Layout"
import "./styles.scss"
export default class SearchIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section--search">
          <h1 className="page--heading">
            Doorzoek de <br /> kunstcollectie
          </h1>
          <SearchFilter />
        </section>
      </Layout>
    )
  }
}
