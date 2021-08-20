import React from "react";
import styles from "./imageDivider.module.scss";
import image from "./gym.jpeg";

const ImageDivider = () => (
  <div
    className={styles.divider}
    style={{ backgroundImage: `url("${image}")` }}
  ></div>
);

export default ImageDivider;
