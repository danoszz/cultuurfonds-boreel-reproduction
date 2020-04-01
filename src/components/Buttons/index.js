import React from "react"
import { Link } from "gatsby"
import arrowRight from "../../img/icon-arrow_right_black.svg"
import "./styles.scss"

class Button extends React.Component {
  render() {
    return (
      <Link className="btn-arrow" to={this.props.to}>
        <span>{this.props.text}</span>
        {this.props.arrow ? (
          <span className={`icon ${this.props.arrowFlipped ? "flipped" : ""}`}>
            <img src={arrowRight} alt="Arrow Right" />
          </span>
        ) : null}
      </Link>
    )
  }
}
export default Button
