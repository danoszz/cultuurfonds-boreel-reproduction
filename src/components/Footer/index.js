import React from "react"
import { Link } from "gatsby"

import "./styles.scss"

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="col--left">
          <div className="navbar-brand">
            <Link to="/" className="footer-menu--item logo" title="Logo">
              <span>Cultuurfonds Boreel</span>
            </Link>
          </div>
          <div className="copyright">
            <p>
              Onder alle rechten voorbehouden. Website door{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://devign.it"
              >
                Devign.it
              </a>
            </p>
          </div>
        </div>
        <div className="col--right">
          <section className="menu">
            <ul className="menu--list">
              <li>
                <Link to="/" className="footer-menu--item">
                  Home
                </Link>
              </li>
              <li>
                <Link className="footer-menu--item" to="/search">
                  Kunstcollectie
                </Link>
              </li>
              <li>
                <Link className="footer-menu--item" to="/over-ons">
                  Over ons
                </Link>
              </li>
              <li>
                <Link className="footer-menu--item" to="/over-ons">
                  Contact
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    )
  }
}

export default Footer
