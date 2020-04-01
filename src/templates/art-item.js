import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../components/Layout"
import { HTMLContent } from "../components/Content"
import "./styles/art-item.scss"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
import fallbackImage from "../img/art-item_noimage.png"
import SeeAllRow from "../components/SeeAllRow"
import arrowRight from "../img/icon-arrow_right_black.svg"
import { validURL } from "../utils/helpers.js"
import ArtRollRelated from "../components/ArtRollRelated"

export const ArtItemPostTemplate = ({
  description,
  title,
  artist,
  metaData,
  portrayedPersons,
  featuredImage
}) => {
  const portayedLink = portrayedPersons
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  const artistLink = artist.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

  return (
    <div className="page--wrapper art-item">
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
            <p
              className="person--description"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
          <div className="info--metadata">
            <h4>Gegevens</h4>
            <table>
              <tbody>
                <tr>
                  <td>Kunstenaar</td>
                  <td>
                    <Link to={`/people/artists/${kebabCase(artistLink)}/`}>
                      {artistLink}
                    </Link>
                  </td>
                </tr>
                {portrayedPersons ? (
                  <tr>
                    <td>Geportretteerde</td>
                    <td>
                      {portrayedPersons ? (
                        <Link
                          to={`/people/portrayed/${kebabCase(portayedLink)}/`}
                        >
                          {portayedLink.toString()}
                        </Link>
                      ) : (
                        "Onbekend"
                      )}
                    </td>
                  </tr>
                ) : null}
                <tr>
                  <td>Objectnummer</td>
                  <td>{metaData.objectNumber || "Onbekend"}</td>
                </tr>
                <tr>
                  <td>Techniek</td>
                  <td>{metaData.usedTechnique || "Onbekend"}</td>
                </tr>
                <tr>
                  <td>Afmetingen</td>
                  <td>{metaData.objectMeasurements || "Onbekend"}</td>
                </tr>
                <tr>
                  <td>IB Nummer</td>
                  <td>{metaData.objectIbNumber || "Onbekend"}</td>
                </tr>
                <tr>
                  <td>Datering</td>
                  <td>{metaData.objectTimeperiod || "Onbekend"}</td>
                </tr>
                <tr>
                  <td>RKD</td>
                  <td>
                    {validURL(metaData.rkdLink) ? (
                      <a
                        href={metaData.rkdLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Bekijk
                      </a>
                    ) : (
                      metaData.rkdLink || "Onbekend"
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="item--image">
          <figure className="art-item--preview">
            {featuredImage ? (
              <div className="featured-thumbnail">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: featuredImage,
                    alt: `Volledige afbeelding voor het kunstwerk genaamd ${title}`
                  }}
                />
              </div>
            ) : (
              <div
                className="fallback-thumbnail"
                style={{ backgroundImage: `url(${fallbackImage})` }}
              >
                <p>
                  Afbeelding is niet beschikbaar. Neem contact op met de
                  beheerder.
                </p>
              </div>
            )}
          </figure>
        </div>
      </section>
      <section className="section--related">
        <div className="container--related">
          <h2>Gerelateerde kunstwerken</h2>
          <div className="container--related">
            <ArtRollRelated name={artistLink} />
          </div>
          <SeeAllRow to="/search" />
        </div>
      </section>
    </div>
  )
}

ArtItemPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
}

const ArtItemPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ArtItemPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.html}
        metaData={post.frontmatter.itemMetadata}
        featuredImage={post.frontmatter.featuredImage}
        artist={post.frontmatter.artist}
        portrayedPersons={post.frontmatter.portrayedPersons}
        helmet={
          <Helmet titleTemplate="%s | Kunstobject">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

ArtItemPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default ArtItemPost

export const pageQuery = graphql`
  query ArtItemPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        artist
        portrayedPersons
        itemMetadata {
          objectIbNumber
          objectMeasurements
          objectNumber
          objectTimeperiod
          rkdLink
          usedTechnique
        }
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 900, quality: 100, toFormat: JPG) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
