import React from "react"
import * as styles from "./panel.module.css"

const Panel = ({ firstContent, secondContent }) => (
  <div className={styles.panel}>
    <div>{firstContent}</div>
    <div>{secondContent}</div>
  </div>
)
export default Panel
