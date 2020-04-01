import React from "react"
import { Link } from "gatsby"
import "./styles.scss"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: ""
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            })
      }
    )
  }

  render() {
    return (
      <nav
        className={"navbar " + (this.props.isTransparent && "is-transparent")}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item logo" title="Logo">
              <span>Cultuurfonds Boreel</span>
            </Link>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start">
              <Link className="navbar-item" to="/search">
                Kunstcollectie
              </Link>
              <Link className="navbar-item" to="/nieuws">
                Nieuws
              </Link>
              <Link className="navbar-item" to="/over-ons">
                Over ons
              </Link>
            </div>
            <div className="navbar-end has-text-centered"></div>
          </div>
          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
