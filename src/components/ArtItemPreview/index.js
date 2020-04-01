import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import PreviewCompatibleImage from "../PreviewCompatibleImage"
import fallbackImage from "../../img/art-item_noimage.png"
import "./styles.scss"

class ArtItemPreview extends React.Component {
  render() {
    let post = this.props.item

    return (
      <Link to={post.fields.slug} key={post.id}>
        <figure className="art-item--preview">
          {post.frontmatter.featuredImage ? (
            <div className="featured-thumbnail">
              <PreviewCompatibleImage
                imageInfo={{
                  image: post.frontmatter.featuredImage,
                  alt: `Uitgelichte afbeelding voor ${post.title}`
                }}
              />
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

ArtItemPreview.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export default ArtItemPreview
