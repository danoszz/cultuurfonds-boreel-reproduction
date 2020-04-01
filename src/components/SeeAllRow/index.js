import React from "react"
import { Link } from "gatsby"
import arrowRight from "../../img/icon-arrow_right.svg"
import arrowRightBrown from "../../img/icon-arrow_right_brown.svg"

import "./styles.scss"

const SeeAllRow = ({ to, text, isDark }) => (
  <div className={isDark ? "see-all--wrapper is-dark" : "see-all--wrapper"}>
    <Link to={to}>
      <span className="line"></span>
      <span className="text">{text || `Bekijk alles`}</span>
      <span className="icon">
        <img src={isDark ? arrowRightBrown : arrowRight} alt="Arrow Right" />
      </span>
    </Link>
  </div>
)

export default SeeAllRow
