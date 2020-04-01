import React from "react"

import Layout from "../../components/Layout"
// import BlogRoll from '../../components/BlogRoll'
import "../../components/styles/styles.scss"

export default class PlaygroundPage extends React.Component {
  render() {
    return (
      <Layout>
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section> */}
        <div class="main-content--hero main-content--hero__home">
          <h1 class="main-content--container">Cultuurfonds Boreel</h1>
        </div>
        <div class="main-content--container">
          <div class="page-home--content__information">
            <h2 class="page--title">Over de online verzameling</h2>
            <p class="page--introduction">
              Et rerum suscipit doloremque omnis velit veniam. Sit soluta
              cupiditate voluptate quis vitae facilis et. Doloribus autem
              architecto pariatur. Perspiciatis quis tempore ut maiores.
              Occaecati est repudiandae saepe. Incidunt recusandae natus beatae
              blanditiis.
            </p>
          </div>
          <div class="c-gallery--search">
            {/* {% component 'searchForm' %} */}
          </div>
          <h2>Een greep uit de collectie</h2>
          {/* {% component 'galleryPosts' %} */}
          <h2>Het laatste nieuws</h2>
          {/* {% component 'newsPosts' %} */}
        </div>
      </Layout>
    )
  }
}
