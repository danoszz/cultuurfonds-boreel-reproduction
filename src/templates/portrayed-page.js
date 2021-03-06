import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import "./styles/art-item.scss"
import ArtRollRelated from "../components/ArtRollRelated"

import SeeAllRow from "../components/SeeAllRow"
import arrowRight from "../img/icon-arrow_right_black.svg"
import { validURL } from "../utils/helpers.js"

export const PortrayedPersonTemplate = ({
  description,
  title,
  dateDeath,
  dateBirth
}) => {
  // const PostContent = contentComponent || Content

  return (
    <>
      <section className="art-item--page">
        <div className="sub-navigation">
          <Link className="btn-back" to={"/search"}>
            <span className="icon flipped">
              <img src={arrowRight} alt="Arrow Right Rotated" />
            </span>
            <span className="text">Ga terug</span>
          </Link>
        </div>
        <h1 className="page--heading">{title}</h1>

        <div className="item--info">
          <div className="info--person">
            <p className="person--dates">
              <span className="date--birth">
                {dateBirth ? dateBirth : "Geboorte datum is onbekend"}
              </span>
              <span className="date--dash"> — </span>
              <span className="date--death">
                {dateDeath ? dateDeath : "Datum van overlijden is onbekend"}
              </span>
            </p>
            <div className="person--description">
              {validURL(description) ? (
                <a href={description} target="_blank" rel="noopener noreferrer">
                  {description.toString()}
                </a>
              ) : (
                <p>{description || "Onbekend"}</p>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="section--related">
        <h2>Afgebeeld op</h2>
        <div className="container--related">
          <ArtRollRelated name={title} />
        </div>
        <SeeAllRow to="/search" />
      </section>
    </>
  )
}

const PortrayedPersonPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PortrayedPersonTemplate
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        dateBirth={post.frontmatter.dateBirth}
        dateDeath={post.frontmatter.dateDeath}
      />
    </Layout>
  )
}

export default PortrayedPersonPage

export const pageQuery = graphql`
  query PortrayedPersonPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        dateBirth
        dateDeath
      }
    }
  }
`
