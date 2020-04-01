import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"
import "./styles/news-post.scss"

export const BlogPostTemplate = ({
  content,
  contentComponent,
  title,
  date
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section--blog-post">
      <div className="blog-post--wrapper">
        <h1 className="page--heading">{title}</h1>
        <p className="blog--date">
          <span className="date--post">{date}</span>
        </p>
        <PostContent className="content" content={content} />
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        content={post.html}
        helmet={
          <Helmet titleTemplate="%s | Nieuws">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        title
        description
        tags
      }
    }
  }
`
