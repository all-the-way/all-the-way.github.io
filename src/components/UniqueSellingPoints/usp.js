import React from "React";
import styles from "./usp.module.scss";

const Usp = ({ heading, text, icon }) => (
  <div className={styles.usp}>
    <img src={icon}></img>
    <h3>{heading}</h3>
    <p>{text}</p>
  </div>
);

export default Usp;
