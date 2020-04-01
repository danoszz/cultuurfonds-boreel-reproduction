import React from "react"

import Layout from "../../components/Layout"
import NewsRoll from "../../components/NewsRoll"

import "./styles.scss"

export default class SearchIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="page--news">
          <h1 className="page--heading">
            Het laatste <br /> nieuws
          </h1>
          <NewsRoll />
        </section>
      </Layout>
    )
  }
}
