require("dotenv").config()

const paintingsQuery = `
{
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "art-item"}}}) {
    nodes {
      id
      fields {
        slug
      }
      frontmatter {
        title
        artist
        templateKey
        date(formatString: "MMMM DD, YYYY")
        portrayedPersons
        featuredImage {
          publicURL
          childImageSharp {
            fluid(maxWidth: 600, quality: 80, toFormat: JPG) {
              aspectRatio
              src
              srcSet
              sizes
              originalImg
              originalName
            }
            original {
              src
            }
            resize(toFormat: JPG, quality: 90) {
              src
            }
          }
        }
        itemMetadata {
          objectIbNumber
          objectNumber
          objectTimeperiod
          usedTechnique
        }
      }
    }
  }
}
`

const finalQuery = [
  {
    query: paintingsQuery,
    transformer: ({ data }) => data.allMarkdownRemark.nodes
  }
]

module.exports = {
  siteMetadata: {
    title: "Cultuurhistorisch Fonds Boreel",
    description:
      "Het Cultuurhistorisch Fonds Boreel is een ANBI Stichting die een kunstverzameling van de familie Boreel beheert."
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: {
          options: {
            sourceMap: true //default is false
          }
        }
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1020
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: "gatsby-plugin-algolia",
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries: finalQuery
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/static/*": ["Cache-Control: public, max-age=31536000, immutable"]
        }
      }
    }
  ]
}
