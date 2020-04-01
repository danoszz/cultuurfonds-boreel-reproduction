import React, { Component } from "react"
import { connectInfiniteHits } from "react-instantsearch-dom"
import ArtItemPreviewAlgolia from "../ArtItemPreviewAlgolia"

class StaticHits extends Component {
  render() {
    const { hits } = this.props

    return (
      <div className="art-item--roll">
        {hits.map(hit => (
          <div className="result--item" key={hit.id}>
            <ArtItemPreviewAlgolia item={hit} />
          </div>
        ))}
      </div>
    )
  }
}

export default connectInfiniteHits(StaticHits)
