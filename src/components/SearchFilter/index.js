import React from "react"
import algoliasearch from "algoliasearch/lite"
import InfiniteHits from "./InfiniteHits"
import "../../components/ArtItemRoll/styles.scss"
import "../../components/ArtItemPreview/styles.scss"
import "./styles.scss"

import {
  InstantSearch,
  SearchBox,
  ClearRefinements,
  Stats,
  Configure,
  connectStateResults
} from "react-instantsearch-dom"
import DropdownRefinementList from "../DropdownRefinementList"

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

const SearchFilter = () => (
  <InstantSearch searchClient={searchClient} indexName="BoreelTest">
    <Configure hitsPerPage={9} />
    <Stats
      translations={{
        stats(nbHits) {
          return `${nbHits} kunstwerken`
        }
      }}
    />

    <div className="search-box--wrapper">
      <SearchBox
        showLoadingIndicator
        submit={<p>Zoek</p>}
        translations={{
          submitTitle: "Zoek kunstwerk",
          placeholder: "Type uw zoekopdacht."
        }}
      />

      <div className="refinement--row">
        <DropdownRefinementList
          title="Kunstenaar"
          attribute="frontmatter.artist"
          limit={250}
          hoverable={true}
        />
        <DropdownRefinementList
          title="Techniek"
          attribute="frontmatter.itemMetadata.usedTechnique"
        />
        <DropdownRefinementList
          title="Objectnummer"
          attribute="frontmatter.itemMetadata.objectNumber"
          limit={250}
        />
        <DropdownRefinementList
          title="Tijdsperiode"
          attribute="frontmatter.itemMetadata.objectTimeperiod"
        />
      </div>
    </div>
    <div className="feedback--row">
      <h4>Uw zoekopdracht</h4>
      <ClearRefinements
        translations={{
          reset: "Verwijder alle filters"
        }}
      />
    </div>

    <Results>
      <InfiniteHits minHitsPerPage={18} />
    </Results>
  </InstantSearch>
)

export default SearchFilter
