import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import "./styles.scss"
import Button from "../Buttons"
class NewsRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="news-list--container">
        {posts &&
          posts.map(({ node: post }) => (
            <Link
              key={post.id}
              to={post.fields.slug}
              className="news-list-item__link"
            >
              <article
                className={`news-list-item ${
                  this.props.isDark ? "is-dark" : ""
                }`}
              >
                <h4 className="title"> {post.frontmatter.title}</h4>
                <p className="date">{post.frontmatter.date}</p>
                <div className="button">
                  <Button
                    to={post.fields.slug}
                    text="Lees bericht"
                    arrow={false}
                  ></Button>
                </div>
              </article>
            </Link>
          ))}
      </div>
    )
  }
}

NewsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export default () => (
  <StaticQuery
    query={graphql`
      query NewsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                date(formatString: "DD/MM/YYYY")
                featuredpost
              }
            }
          }
        }
      }
    `}
    render={(data, isDark, count) => (
      <NewsRoll data={data} isDark={true} count={count} />
    )}
  />
)
