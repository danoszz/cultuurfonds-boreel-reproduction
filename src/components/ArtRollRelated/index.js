import React from "react"
import algoliasearch from "algoliasearch/lite"
import StaticHits from "../ArtRollFiltered/StaticHits"

import "./styles.scss"

import {
  InstantSearch,
  Configure,
  connectStateResults
} from "react-instantsearch-dom"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const Results = connectStateResults(({ searchResults, children }) =>
  searchResults && searchResults.nbHits !== 0 ? (
    children
  ) : (
    <div className="no-results artist-page">
      <p>Er zijn geen gerelateerde kunstwerken gevonden</p>
    </div>
  )
)

const ArtRollRelated = ({ name }) => (
  <InstantSearch searchClient={searchClient} indexName="Boreel">
    <Configure
      filters={`frontmatter.artist:"${name}" OR frontmatter.portrayedPersons:"${name}"`}
    />
    <Results>
      <StaticHits />
    </Results>
  </InstantSearch>
)

export default ArtRollRelated
