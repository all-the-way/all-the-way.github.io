import React from "react"
import * as styles from "./carousel.module.css"
const CarouselItem = ({ image, heading, position, children }) => {
  return (
    <div className={styles.carouselItem}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <h3 className={`${position === "bottom" ? styles.bottom : ""}`}>
        {heading}
      </h3>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default CarouselItem
