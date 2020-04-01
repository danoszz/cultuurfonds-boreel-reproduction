import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import ArtItemPreview from "../ArtItemPreview"
import "./styles.scss"

class ArtItemRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    let mappedItems = posts || 3

    if (this.props.amount > 0) {
      mappedItems = posts.slice(0, this.props.amount)
    }

    return (
      <div className="art-item--roll">
        {posts &&
          mappedItems.map(({ node: post }) => {
            return (
              <div className="result--item" key={post.id}>
                <ArtItemPreview item={post} />
              </div>
            )
          })}
      </div>
    )
  }
}

ArtItemRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export default () => (
  <StaticQuery
    query={graphql`
      query ArtItemRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "art-item" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                portrayedPersons
              }
            }
          }
        }
      }
    `}
    render={(data, count) => (
      <ArtItemRoll data={data} count={count} amount={3} />
    )}
  />
)
