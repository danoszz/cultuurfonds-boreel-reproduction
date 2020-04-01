import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Configure, Highlight } from "react-instantsearch-dom"
import Autocomplete from "./autocomplete"

import "./styles.scss"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

class QuickSearchBoxNew extends Component {
  state = {
    query: ""
  }

  onSuggestionSelected = (_, { suggestion }) => {
    this.setState({
      query: suggestion.name
    })
  }

  onSuggestionCleared = () => {
    this.setState({
      query: ""
    })
  }

  render() {
    return (
      <div className="search-box small home-page">
        <div className="form-field--wrapper">
          <h4 className="h4__large">Doorzoek de collectie</h4>
          <InstantSearch indexName="Boreel" searchClient={searchClient}>
            <Configure hitsPerPage={5} />
            <Autocomplete
              onSuggestionSelected={this.onSuggestionSelected}
              onSuggestionCleared={this.onSuggestionCleared}
            />
          </InstantSearch>
        </div>
        <div className="advanced-search">
          <Link to="/search">Geavanceerd zoeken</Link>
        </div>
      </div>
    )
  }
}

function Hit(props) {
  return (
    <div>
      <Highlight attribute="name" hit={props.hit} />
    </div>
  )
}
Hit.propTypes = {
  hit: PropTypes.object.isRequired
}

export default QuickSearchBoxNew
