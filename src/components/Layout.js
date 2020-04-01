import React from "react"
import { Helmet } from "react-helmet"
import Footer from "./Footer/index"
import Navbar from "./Navbar/index"
import "./all.scss"
import useSiteMetadata from "./SiteMetadata"
import { withPrefix } from "gatsby"
import NetlifyIdentify from "./NetlifyIdentity"

const TemplateWrapper = ({ children, transNav }) => {
  const { title, description } = useSiteMetadata()

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon/favicon-16x16.png`}
          sizes="16x16"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <NetlifyIdentify />
      <Navbar isTransparent={transNav} />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
