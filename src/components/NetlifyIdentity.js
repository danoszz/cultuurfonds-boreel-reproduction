import React from "react"
import netlifyIdentity from "netlify-identity-widget"

class NetlifyIdentify extends React.Component {
  componentDidMount() {
    const windowGlobal = typeof window !== "undefined" && window

    windowGlobal.netlifyIdentity = netlifyIdentity
    // You must run this once before trying to interact with the widget
    netlifyIdentity.init()
  }

  render() {
    return <div className="netlifyIdentity" />
  }
}

export default NetlifyIdentify
