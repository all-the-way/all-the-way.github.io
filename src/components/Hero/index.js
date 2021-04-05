import React from "react";
import styles from "./hero.module.scss";

const Hero = ({ children }) => (
  <header className={styles.masthead} id="start">
    {children}
  </header>
);

export default Hero;
