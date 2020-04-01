import React, { Component } from "react"
import { graphql } from "gatsby"
import { connectInfiniteHits } from "react-instantsearch-dom"
import PropTypes from "prop-types"
import ArtItemPreviewAlgolia from "../ArtItemPreviewAlgolia"
import ArtItemPreview from "../ArtItemPreview"

class InfiniteHits extends Component {
  static propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    hasMore: PropTypes.bool.isRequired,
    refine: PropTypes.func.isRequired
  }

  sentinel = null

  onSentinelIntersection = entries => {
    const { hasMore, refine } = this.props

    entries.forEach(entry => {
      if (entry.isIntersecting && hasMore) {
        refine()
      }
    })
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(this.onSentinelIntersection)

    this.observer.observe(this.sentinel)
  }

  componentWillUnmount() {
    this.observer.disconnect()
  }

  render() {
    const { hits } = this.props

    return (
      <div className="art-item--roll">
        {hits.map(hit => (
          <div className="result--item" key={hit.id}>
            <ArtItemPreviewAlgolia item={hit} />
          </div>
        ))}
        <span
          className="ais-InfiniteHits-sentinel"
          ref={c => (this.sentinel = c)}
        ></span>
      </div>
    )
  }
}

export default connectInfiniteHits(InfiniteHits)
