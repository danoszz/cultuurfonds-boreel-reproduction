import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PreviewCompatibleImage from "../PreviewCompatibleImage"
import fallbackImage from "../../img/art-item_noimage.png"
import "./styles.scss"

class ArtItemPreviewAlgolia extends React.Component {
  render() {
    let post = this.props.item

    return (
      <Link to={post.fields.slug} key={post.id}>
        <figure className="art-item--preview">
          {post.frontmatter.featuredImage ? (
            <div className="featured-thumbnail">
              <Img
                fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                alt={`Uitgelichte afbeelding voor ${post.frontmatter.title}`}
              />
              {/* {true ? (
                <Img
                  fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                  alt={`Uitgelichte afbeelding voor ${post.frontmatter.title}`}
                />
              ) : (
                <img
                  className="image-temporary"
                  src={post.frontmatter.featuredImage.publicURL}
                  alt={`Uitgelichte afbeelding voor ${post.frontmatter.title}`}
                />
              )} */}
            </div>
          ) : (
            <div
              className="fallback-thumbnail"
              style={{ backgroundImage: `url(${fallbackImage})` }}
            ></div>
          )}
          <figcaption>
            {post.frontmatter.date && <p>post.frontmatter.date</p>}
            <h3>{post.frontmatter.title}</h3>
          </figcaption>
        </figure>
      </Link>
    )
  }
}

ArtItemPreviewAlgolia.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export default ArtItemPreviewAlgolia
