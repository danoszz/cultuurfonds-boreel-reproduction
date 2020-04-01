import React from "react"
import algoliasearch from "algoliasearch/lite"
import StaticHits from "./StaticHits"

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

const Results = connectStateResults(
  ({ searchState, searchResults, children }) =>
    searchResults && searchResults.nbHits !== 0 ? (
      children
    ) : (
      <div className="no-results">
        <p>
          Er zijn geen resultaten gevonden
          {searchState.length > 0 ? "voor " + searchState.query : null}
        </p>
      </div>
    )
)

const FilteredArtRoll = ({ maxHits }) => (
  <InstantSearch searchClient={searchClient} indexName="Boreel">
    <Configure hitsPerPage={maxHits || 3} />
    <Results>
      <StaticHits hits={maxHits || 3} />
    </Results>
  </InstantSearch>
)

export default FilteredArtRoll
