# Kunsthistorisch Cultuurfonds Boreel | Reproduction

Minimal reproducible test case for https://github.com/algolia/gatsby-plugin-algolia/issues/48

## Prerequisites

- Node
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

## Getting Started

```
gatsby new https://github.com/danoszz/cultuurfonds-boreel-demo.git
cd cultuurfonds-boreel-demo
gatsby build
gatsby serve
```

## Structure

- Search page is `localhost:8000/search'
- Algolia search component is `SearchFilter`
- Result component w/ Gatsby Image is `ArtItemPreviewAlgolia`
