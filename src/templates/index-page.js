import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import NewsRoll from "../components/NewsRoll/index"
import QuickSearchBoxNew from "../components/QuickSearchBox/index.js"
import SeeAllRow from "../components/SeeAllRow"
import Logo from "../img/boreel_wapen_1868.png"
import HeaderHomeImage from "../img/hero-home_background.jpg"
import ArtRollFiltered from "../components/ArtRollFiltered"
import "./styles/index-page.scss"

export const IndexPageTemplate = ({ title }) => (
  <header className="hero-wrapper">
    <div
      className="hero-content"
      style={{
        backgroundImage: `url(${HeaderHomeImage})`,
        backgroundPosition: `center center`
      }}
    >
      <h1 className="h1__large title">{title}</h1>
      <QuickSearchBoxNew />
    </div>
  </header>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout transNav={true}>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
      <section className="section--highlights">
        <div className="highlights--column">
          <h2 className="page--heading">
            Uitgelichte <br /> kunstwerken
          </h2>
          <ArtRollFiltered maxHits={6} />

          <SeeAllRow to="/search" isDark={true} />
        </div>
      </section>
      <section className="section--about">
        <div className="container--about">
          <div className="col--logo">
            <img src={Logo} alt="Wapen Boreel" />
          </div>
          <div className="col--text">
            <h2>{frontmatter.mainpitch.title}</h2>
            <p>{frontmatter.mainpitch.description}</p>
          </div>
        </div>
      </section>
      <section className="section--news">
        <div className="container--news">
          <h2>Het laatste nieuws</h2>
          <NewsRoll />
        </div>
      </section>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          heading
          description
        }
      }
    }
  }
`
